import React, { useEffect, useState } from 'react';
import { Form, Input, Grid } from 'semantic-ui-react';
import { TxButton } from './substrate-lib/components';
import { useSubstrate } from './substrate-lib';
import { Element } from 'react-scroll';

export default function Main (props) {
  const [status, setStatus] = useState(null);
  const [formState, setFormState] = useState({ addressTo: null, amount: 0 });
  const { accountPair } = props;
  const [disableButton, setDisableButton] = useState(true);
  const { api } = useSubstrate();
  const [blockNumber, setBlockNumber] = useState(0);
  const [crowdLoanData, setCrowdLoanData] = useState({});
  const { amount } = formState;
  const paraId = '2015';

  const onChange = (_, data) => {
    setFormState(prev => ({ ...prev, [data.state]: data.value }));
    if (data.value === '' || data.value <= 0) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  };

  const bestNumber = api.derive.chain.bestNumber;

  useEffect(() => {
    let unsubscribeAll = null;
    bestNumber(number => {
      setBlockNumber(number.toNumber());
    })
      .then(unsub => {
        unsubscribeAll = unsub;
      })
      .catch(console.error);

    return () => unsubscribeAll && unsubscribeAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bestNumber]);

  useEffect(() => {
    if (blockNumber >= crowdLoanData.end && blockNumber > 0 && crowdLoanData && Object.keys(crowdLoanData).length !== 0) {
      setDisableButton(true);
      setStatus('crowdloan has ended');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blockNumber]);

  useEffect(() => {
    const queryResHandler = result => {
      setCrowdLoanData(result.toJSON());
    };
    const crowdLoan = async () => {
      await api.query.crowdloan.funds(['2004'], queryResHandler);
    };
    crowdLoan();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid.Column style={{padding:'0'}} id='contribute' width={8}>
      <h5 style={{ color: "#75e6da" }}>2 WAYS TO TAKE PART</h5>
      <h1>Participate in the Integritee Crowdloan!</h1>
      <h1>On this site</h1>
      <p>1. Download the Polkadot Browser extension for Chrome/Firefox <a href='https://polkadot.js.org/extension/'>here</a>.</p>
      <p>2. Ensure that you have KSM in your Polkadot.js account.</p>
      <p>3. Unbond your KSM. See further details here.</p>
      <Grid.Row>
        <Grid.Column>gasfdsfasdfsdfafasdf</Grid.Column>
        <Grid.Column> <Form>
        <Form.Field>
          <Input
            fluid
            label='KSM To Lock Up'
            type='number'
            default='Enter KSM Amount'
            value={amount}
            state='amount'
            step='0.1'
            min={0.1}
            onChange={onChange}
          />
        </Form.Field>
        <Form.Field style={{ textAlign: 'left' }}>
          <TxButton
            accountPair={accountPair}
            label='Participate Now!'
            type='SIGNED-TX'
            setStatus={setStatus}
            attrs={{
              palletRpc: 'crowdloan',
              callable: 'contribute',
              inputParams: [paraId, amount * Math.pow(10, 12), null],
              paramFields: [true, true, false],
              disableButton: disableButton
            }}
          />
        </Form.Field>
        <div style={{ overflowWrap: 'break-word' }}>{status}</div>
        </Form></Grid.Column>
      </Grid.Row>
    </Grid.Column>
  );
}
