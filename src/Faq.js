import { Grid, Container } from 'semantic-ui-react';
import React, { useState } from 'react';

export default function Main (props) {
  const [faqContent, setFaqContent] = useState();
  const showContent = () => {
    switch (faqContent) {
      default: return (<div className="text"><h3>How does crowdlending work?</h3>
                <p>Kusama parachain slots are leased, for a limited period, via slot auctions. Projects bid for
                auction slots with collateral in the form of KSM tokens. Crowdlending is one way for bid
                ders to raise the collateral they need to win a slot. Integritee supporters can “lend” their
                tokens – in a process called bonding, staking, or nominating – to help the company achieve
                its go Kusama.</p><p>Lenders (or “nominators”) never cede custody of their tokens; the bids are merely locked for the
                duration of the lease, and released in full at the end of the period. Integritee will never get access
                to your wallet or tokens and will never hold any contributions. This process works directly between contributors and the Kusama Network.</p></div>);
      case 2: return (<div className="text"><h3>What will I get for my support?</h3>
                <p>Lenders will be rewarded with TEER tokens. This token has an intrinsic value, as it gives access to Integritee’s services, as well as a market value, which will increase with adoption.
                Each supporter will be allocated TEER according to the following formula:
                Your KSM contribution / total KSM contributions * 1,000,000
</p></div>);
      case 3: return (<div className="text"><h3>How long will the tokens be locked?</h3>
                <p>Bonded KSM tokens will be locked for a total of 48 weeks, the duration of the lease.</p></div>);
      case 4: return (<div className="text"><h3>How will my KSM be returned to me?</h3>
                <p>All KSM tokens are automatically released to their owners at the end of the lease period. They never leave your custody. This process works directly between contributors and the Kusama Network.</p></div>);
      case 5: return (<div className="text"><h3>What is unbounding?</h3>
                <p>KSM tokens that are currently staked need to be unbonded (unstaked) before they can be bonded to a new crowd loan. There is a delayed exit period of 7 days during which tokens cannot be transferred to a new bond.
You can find out how to unstake on the <a href='https://support.polkadot.network/support/solutions/articles/65000167902-how-can-i-unstake-my-tokens-again-'>Polkadot wiki</a>.
</p></div>);
      case 6: return (<div className="text"><h3>I have KSM on an exchange, do i need to unbound?</h3>
                <p>The process depends on the exchange – contact them to find out how to participate, or see instructions on <a href='https://www.kraken.com/learn/parachain-auctions'>Kraken</a> and <a href='https://medium.com/kucoinexchange/kucoin-supports-the-kusama-parachain-slot-auction-5cc1793a2dfe'>KuCoin</a>. If your exchange does not support nomination directly, you will need to unbond your KSM tokens and transfer them to Polkadot.js. </p></div>);
      case 7: return (<div className="text"><h3>What happens if Integritee does not win the parachain auction?</h3>
                <p>Integritee will continue to bid in subsequent auctions until it has won a lease, or until six weeks after the beginning of the crowd loan period. If that happens all KSM tokens will be released to their owners.</p></div>);
    }
  };

  return (<div className='faq'>
        <Container>
            <div className="text">
        <h2>FAQ's</h2>
        <Grid>
                    <Grid.Column width={5} className='link'>
                <button className={`${faqContent == 1 ? 'active': ''}`} onClick={() => setFaqContent(1)}>HOW DOES CROWDLENDING WORK?</button>
                <button className={`${faqContent == 2 ? 'active': ''}`} onClick={() => setFaqContent(2)}>WHAT WILL I GET FOR MY SUPPORT?</button>
                <button className={`${faqContent == 3 ? 'active': ''}`} onClick={() => setFaqContent(3)}>HOW LONG WILL THE TOKENS BE LOCKED?</button>
                        <button className={`${faqContent == 4 ? 'active': ''}`} onClick={() => setFaqContent(4)}>HOW WILL MY KSM BE RETURNED TO ME?</button>
                <button className={`${faqContent == 5 ? 'active': ''}`} onClick={() => setFaqContent(5)}>WHAT IS UNBONDING?</button>
                <button className={`${faqContent == 6 ? 'active': ''}`} onClick={() => setFaqContent(6)}>I HAVE KSM ON AN EXCHANGE, DO I NEED TO UNBOND?</button>
                        <button className={`${faqContent == 7 ? 'active': ''}`} onClick={() => setFaqContent(7)}>WHAT HAPPENS IF INTEGRITEE DOES NOT WIN THE PARACHAIN AUCTION?</button>
            </Grid.Column>
                    <Grid.Column width={10} className="right-section">
                {showContent()}
            </Grid.Column>
                </Grid>
            </div>
        </Container>
    </div>);
}