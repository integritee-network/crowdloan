import { Grid } from 'semantic-ui-react';
import React, { useState, } from 'react';

export default function Main (props) {
    const [faqContent, setFaqContent] = useState();
    const showContent = (content) => {
        switch (faqContent) {
            default: return (<div><h1>How does crowdlending work?</h1>
                <p>Kusama parachain slots are leased, for a limited period, via slot auctions. Projects bid for
                auction slots with collateral in the form of KSM tokens. Crowdlending is one way for bid
                ders to raise the collateral they need to win a slot. Integritee supporters can “lend” their
                tokens – in a process called bonding, staking, or nominating – to help the company achieve
                its go Kusama.</p><p>Lenders (or “nominators”) never cede custody of their tokens; the bids are merely locked for the
                duration of the lease, and released in full at the end of the period. Integritee will never get access
                to your wallet or tokens and will never hold any contributions. This process works directly between contributors and the Kusama Network.</p></div>)
            case 2: return (<div><h1>WHAT WILL I GET FOR MY SUPPORT?</h1></div>)
            case 3: return (<div><h1>HOW LONG WILL THE TOKENS BE LOCKED?</h1></div>)
            case 4: return (<div><h1>WHAT IS UNBONDING?</h1></div>)
            case 5: return (<div><h1>I HAVE KSM ON AN EXCHANGE, DO I NEED TO UNBOND?</h1></div>)
            case 6: return (<div><h1>WHAT HAPPENS IF INTEGRITEE DOES NOT WIN THE PARACHAIN AUCTION?</h1></div>)
            case 7: return (<div><h1>WILL THERE BE ANOTHER CHANCE TO PARTICIPATE?</h1></div>)
        }
    }

    return (<div>
        <h1>FAQ's</h1>
        <Grid>
            <Grid.Column width={4}>
                <button onClick={() => setFaqContent(1)}>HOW DOES CROWDLENDING WORK?</button>
                <button onClick={() => setFaqContent(2)}>WHAT WILL I GET FOR MY SUPPORT?</button>
                <button onClick={() => setFaqContent(3)}>HOW LONG WILL THE TOKENS BE LOCKED?</button>
                <button onClick={() => setFaqContent(4)}>WHAT IS UNBONDING?</button>
                <button onClick={() => setFaqContent(5)}>I HAVE KSM ON AN EXCHANGE, DO I NEED TO UNBOND?</button>
                <button onClick={() => setFaqContent(6)}>WHAT HAPPENS IF INTEGRITEE DOES NOT WIN THE PARACHAIN AUCTION?</button>
                <button onClick={() => setFaqContent(7)}>WILL THERE BE ANOTHER CHANCE TO PARTICIPATE?</button>
            </Grid.Column>
            <Grid.Column width={8}>
                {showContent(faqContent)}
            </Grid.Column>
        </Grid>
    </div>)
}