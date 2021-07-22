import React, { useState, createRef } from 'react';
import { Container, Dimmer, Loader, Grid, Sticky, Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { SubstrateContextProvider, useSubstrate } from './substrate-lib';

import AccountSelector from './AccountSelector';
import Contribute from './Contribute';
import Crowdloan from './Crowdloan';
import Why from './Why';
import Faq from './Faq';
import './css/App.css'
import ThreeBox from './ThreeBox';
import How from './How';

function Main () {
  const [accountAddress, setAccountAddress] = useState(null);
  const { apiState, keyring, keyringState, apiError } = useSubstrate();
  const accountPair =
    accountAddress &&
    keyringState === 'READY' &&
    keyring.getPair(accountAddress);

  const loader = text =>
    <Dimmer active>
      <Loader size='small'>{text}</Loader>
    </Dimmer>;

  const message = err =>
    <Grid centered columns={2} padded>
      <Grid.Column>
        <Message negative compact floating
          header='Error Connecting to Substrate'
          content={`${JSON.stringify(err, null, 4)}`}
        />
      </Grid.Column>
    </Grid>;

  if (apiState === 'ERROR') return message(apiError);
  else if (apiState !== 'READY') return loader('Connecting to Kusama');

  if (keyringState !== 'READY') {
    return loader('Loading accounts (please review any extension\'s authorization)');
  }

  // const anchor = document.querySelector('#some-id')
  // anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })

  const contextRef = createRef();

  return (
    <div ref={contextRef}>
      <AccountSelector setAccountAddress={setAccountAddress} />
        <Why />
        <ThreeBox />
        <How />
        <Container>
        {/* <Crowdloan /> */}
        <Contribute id='#contribute' accountPair={accountPair} />
      </Container>
      <Faq />
    </div>
  );
}

export default function App () {
  return (
    <SubstrateContextProvider>
      <Main />
    </SubstrateContextProvider>
  );
}
