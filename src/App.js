import React, { useState, createRef } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { SubstrateContextProvider, useSubstrate } from './substrate-lib';
import UpperMenu from './UpperMenu';
// removing the import below makes a dot appear next to the KSM Contributed value, which is not desired, should be fixed
// eslint-disable-next-line no-unused-vars
import Contribute from './Contribute';
import Why from './Why';
import Faq from './Faq';
import './css/App.css';
import How from './How';
import Participate from './Participate';
import Value from './Value';
import Rewards from './Rewards';
import EarlySporter from './EarlySupporter';
import Roadmap from './Roadmap';
import Clients from './clients';
import Referral from './Referral';
import Support from './SupporterReward';
import SupportM from './SupportRewardMobile';
import Footer from './Footer';
import LoyalityRewards from './LoyalityRewards';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { formatBalance } from '@polkadot/util';
import { useGlobalState } from './state';

function Main () {
  const [, setAccountAddress] = useState(null);
  const { apiState } = useSubstrate();

  const [crowdLoanRunning] = useGlobalState('crowdLoanRunning');

  formatBalance.setDefaults({
    decimals: 12,
    unit: 'KSM'
  });

  const contextRef = createRef();
  console.log(apiState);

  return (
    <div ref={contextRef}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
      <UpperMenu setAccountAddress={setAccountAddress} />
      <Why />
      <Rewards />
      <EarlySporter />
      <Support />
      <SupportM />
      <LoyalityRewards />
      <Referral />
      {apiState !== 'READY' || !crowdLoanRunning ? <></> : <Participate />}
      <Value />
      <How />
      <Roadmap />
      <Faq />
      <Clients />
      <Footer />
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
