#!/usr/bin/env python3.9
import csv
import sys
from datetime import datetime
import pytz

if len(sys.argv) < 2:
    print("Usage: ./reward_calculation.py <fund index>")
    sys.exit()

fund_id = sys.argv[1]
if fund_id == '24':
    blocknumber_crowdloan_end = 9_676_800
    pot_guaranteed_rewards = 21460.2955281453 # TEER (correction after missing some contributions)
    winning = False
elif fund_id == '38':
    blocknumber_crowdloan_end = 10_281_600
    pot_guaranteed_rewards = 20_000  # TEER
    winning = False
elif fund_id == '56':
    blocknumber_crowdloan_end = 10_786_200
    pot_guaranteed_rewards = 0  # TEER (didn't reach threshold)
    winning = False
elif fund_id == '59':
    blocknumber_crowdloan_end = 11_391_600
    pot_guaranteed_rewards = 20_000  # TEER
    base_reward_per_ksm = 40  # TEER
    early_reward_factor = 0.2
    early_reward_endtime = datetime.fromisoformat("2022-01-07 08:00+00:00")  # GMT
    referral_reward_factor = 0.05
    loyalty_ids = [24, 38, 56]
    loyalty_reward_factor = 0.10
    winning = True
elif fund_id == '0':
    blocknumber_crowdloan_end = 200
    pot_guaranteed_rewards = 20_000  # TEER
    base_reward_per_ksm = 40  # TEER
    early_reward_factor = 0.2
    early_reward_endtime = datetime.fromisoformat("2022-01-07 08:00+00:00")  # GMT
    referral_reward_factor = 0.05
    loyalty_ids = ['0-previous', '0-previous2']
    loyalty_reward_factor = 0.10
    winning = True
else:
    raise(BaseException(f'unknown fund-id: {fund_id}'))

# Settings:

input_file = f'contributions-2015-{fund_id}.csv'
referral_file = f'referrals-2015-{fund_id}.csv'
output_file = f'rewards-2015-{fund_id}.csv'

waived_accounts = ["EZwaNLfEwAMYcEdbp7uKYFCjnsn43S85pm6BumT5UwvZQvB",
                    "G7Lwgm7GxrH2V6BREqSdi9EtKAD9DLmREiPW9YnkmpuxDwW",
                    "E5rK9r9LEa5JPr1iabNaGSMy8GHu1MX2ShnPYSbKLA37xEH",
                    "EijCociWDFh6ZBKY3P6KnvujkmcttiNVrTLS8WvcQ7KDHRx"]

existential_deposit = 0.001  # 1mTEER

global contributors, previous_contributions_max

referrals = {}



def to_ksm(picoksm: int) -> float:
    return picoksm * pow(10, -12)


class Contribution:
    """A single crowdloan contribution

    amount: [TEER]
    """
    def __init__(self, amount: float, blocknumber: int, timestamp: datetime):
        self.amount = amount
        self.blocknumber = blocknumber
        self.timestamp = timestamp

    def cointime(self) -> float:
        global blocknumber_crowdloan_end
        return self.amount * (blocknumber_crowdloan_end - self.blocknumber)


def read_contributions_from_file(file: str) -> {}:
    contributors = {}
    with open(file, newline='') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            a = row[0]
            c = Contribution(to_ksm(float(row[1])), int(row[2]), datetime.fromtimestamp(float(row[3]), pytz.utc))
            if a not in contributors.keys():
                contributors[a] = [c]
            else:
                contributors[a].append(c)
    return contributors


def read_referrals_from_file():
    """
    reads referrals and validates referrals topographically
    can't prevent referring someone who has previously contributed without having referred someone before.
    But that's fine as only contributions after the referral are counted
    """
    global referrals

    unreferrable = set()

    with open(referral_file, newline='') as csvfile:
        reader = csv.reader(csvfile)

        # first line is column title
        _ = next(reader)

        for row in reader:
            referrer = row[0]
            referred = row[1]
            blocknumber = int(row[2])
            timestamp = datetime.fromisoformat(row[3]+"+00:00")

            if referred in unreferrable:
                print(f"SKIPPING: {referrer} referred {referred} at {blocknumber} but {referred} has referred or been referred already")
                continue
            if referred in referrals and referrer in referrals[referred]:
                print(f"SKIPPING: {referrer} referred {referred} at {blocknumber} but can't refer your referrer")
                continue

            if referrer not in referrals.keys():
                referrals[referrer] = {referred: blocknumber}
            else:
                referrals[referrer][referred] = blocknumber
            unreferrable.add(referred)
            unreferrable.add(referrer)


def get_total_cointime(address: str = None) -> int:
    """
    calculates the total cointime for a given or all addresss.
    cointime = contribution times number of blocks until end of crowdloan

    :param address: account address. If None calculate for all addresses.
    :return: total cointime
    """
    global contributors

    if address is None:
        addresses = contributors.keys()
    else:
        if address in contributors.keys():
            addresses = [address]
        else:
            return 0

    tot = 0
    for a in addresses:
        if a in waived_accounts:
            continue
        contributions = contributors[a]
        for c in contributions:
            tot += c.cointime()
    return tot


def get_early_contributions(address: str) -> int:
    global contributors
    tot = 0
    if address in waived_accounts:
        return 0
    contributions = contributors[address]
    for c in contributions:
        if c.timestamp < early_reward_endtime:
            tot += c.amount
    return tot


def calculate_referral_rewards() -> {str: float}:
    global contributors, referrals, referral_reward_factor
    referral_rewards = {}

    # invert referral lookup
    referreds = {}

    for referrer, rfrls  in referrals.items():
        for referred, blocknumber in rfrls.items():
            referreds[referred] = (referrer, blocknumber)

    for a in contributors.keys():
        if a in referreds.keys():
            (referrer, blocknumber) = referreds[a]
            referred = a
            for c in contributors[a]:
                if c.blocknumber < blocknumber:
                    print(f"SKIP referral to {referred} at {blocknumber} happened after contributuion at {c.blocknumber}")
                    continue
                if not referrer in referral_rewards:
                    referral_rewards[referrer] = 0.0
                referral_rewards[referrer] += c.amount * referral_reward_factor
                if not referred in referral_rewards:
                    referral_rewards[referred] = 0.0
                referral_rewards[referred] += c.amount * referral_reward_factor
    return referral_rewards


def gather_previous_campaign_contributions() -> {str: float}:
    contributions =  {}
    for fund_id in loyalty_ids:
        contribs = read_contributions_from_file(f'contributions-2015-{fund_id}.csv')
        for a, cs in contribs.items():
            total = sum(c.amount for c in cs)
            if a in contributions.keys():
                if contributions[a] < total:
                    contributions[a] = total
            else:
                contributions[a] = total
    return contributions

def calculate_all_rewards():
    """
    writes all rewards into the output file set by global variable

    """
    global contributors, output_file, previous_contributions_max, winning
    overall_total_cointime = get_total_cointime()

    total_rewards = {
        'base': 0.0,
        'early': 0.0,
        'referral': 0.0,
        'loyalty': 0.0,
        'guaranteed': 0.0
    }

    referral_rewards = calculate_referral_rewards()

    with open(output_file, "w", newline='') as output:
        writer = csv.writer(output)
        writer.writerow(['# account','total', 'base', 'early', 'referral', 'guaranteed'])
        for a in contributors.keys():
            if a in waived_accounts:
                continue

            contributions = contributors[a]
            # base reward
            total_ksm = sum(c.amount for c in contributions)
            #print(f'{a} has contributed {total_ksm} in total')

            # guaranteed reward
            reward_guaranteed = pot_guaranteed_rewards * get_total_cointime(a) / overall_total_cointime
            reward_guaranteed = max(existential_deposit, reward_guaranteed)
            total_rewards['guaranteed'] += reward_guaranteed

            if winning:
                reward_base = base_reward_per_ksm * total_ksm
                total_rewards['base'] += reward_base

                # early bonus
                reward_early = base_reward_per_ksm * early_reward_factor * get_early_contributions(a)
                total_rewards['early'] += reward_early

                # referral bonus
                reward_referral = referral_rewards[a]
                total_rewards['referral'] += reward_referral

                # loyalty reward
                if a in previous_contributions_max.keys():
                    #print(f'{a} has previously contributed {previous_contributions_max[a]}')
                    reward_loyalty = min(total_ksm, previous_contributions_max[a]) * loyalty_reward_factor
                else:
                    reward_loyalty = 0
                total_rewards['loyalty'] += reward_loyalty


                total = reward_base + reward_early + reward_referral + reward_loyalty + reward_guaranteed
                writer.writerow([a, total, reward_base, reward_early, reward_referral, reward_loyalty, reward_guaranteed])
            else:
                # non-winning campaign
                writer.writerow([a, reward_guaranteed, 0, 0, 0, 0, reward_guaranteed])

    print(f"total rewards: {total_rewards}")


if __name__ == "__main__":
    global contributors, previous_contributions_max
    # calculate reward for all addresses
    print("read in all contributors ... ")
    contributors = read_contributions_from_file(input_file)
    print(f"read contributions from {len(contributors.keys())} contributors")

    if winning:
        print("read in all referrals ... ")
        read_referrals_from_file()
        print(f"read {len(referrals)} legit and unique referrals")

        previous_contributions_max = gather_previous_campaign_contributions()

    print("calculating rewards ... ")
    calculate_all_rewards()

