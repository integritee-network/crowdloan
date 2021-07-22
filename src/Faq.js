import { Grid, Container } from 'semantic-ui-react';
import React, { useState, } from 'react';

export default function Main (props) {
    const [faqContent, setFaqContent] = useState();
    const showContent = () => {
        switch (faqContent) {
            default: return (<div className="text"><h1>How does crowdlending work?</h1>
                <p>Kusama parachain slots are leased, for a limited period, via slot auctions. Projects bid for
                auction slots with collateral in the form of KSM tokens. Crowdlending is one way for bid
                ders to raise the collateral they need to win a slot. Integritee supporters can “lend” their
                tokens – in a process called bonding, staking, or nominating – to help the company achieve
                its go Kusama.</p><p>Lenders (or “nominators”) never cede custody of their tokens; the bids are merely locked for the
                duration of the lease, and released in full at the end of the period. Integritee will never get access
                to your wallet or tokens and will never hold any contributions. This process works directly between contributors and the Kusama Network.</p></div>)
            case 2: return (<div className="text"><h1>What will I get for my support?</h1>
                <p>Lorem Ipsum</p></div>)
            case 3: return (<div className="text"><h1>How long will the tokens be locked?</h1>
                <p>Lorem Ipsum</p></div>)
            case 4: return (<div className="text"><h1>What is unbounding?</h1>
                <p>Lorem Ipsum</p></div>)
            case 5: return (<div className="text"><h1>I have KSM on an exchange, do i need to unbound?</h1>
                <p>Lorem Ipsum</p></div>)
            case 6: return (<div className="text"><h1>What happens if Integritee does not win the parachain auction?</h1>
                <p>Lorem Ipsum</p></div>)
            case 7: return (<div className="text"><h1>Will there be another chance to participate?</h1>
                <p>Lorem Ipsum</p></div>)
        }
    }

    return (<div className='faq'>
        <Container>
            <div className="text">
        <h1>FAQ's</h1>
        <Grid>
                    <Grid.Column width={4} className='link'>
                <button onClick={() => setFaqContent(1)}>HOW DOES CROWDLENDING WORK?</button>
                <button onClick={() => setFaqContent(2)}>WHAT WILL I GET FOR MY SUPPORT?</button>
                <button onClick={() => setFaqContent(3)}>HOW LONG WILL THE TOKENS BE LOCKED?</button>
                <button onClick={() => setFaqContent(4)}>WHAT IS UNBONDING?</button>
                <button onClick={() => setFaqContent(5)}>I HAVE KSM ON AN EXCHANGE, DO I NEED TO UNBOND?</button>
                <button onClick={() => setFaqContent(6)}>WHAT HAPPENS IF INTEGRITEE DOES NOT WIN THE PARACHAIN AUCTION?</button>
                <button onClick={() => setFaqContent(7)}>WILL THERE BE ANOTHER CHANCE TO PARTICIPATE?</button>
            </Grid.Column>
                    <Grid.Column width={8}>
                {showContent()}
            </Grid.Column>
                </Grid>
            </div>
        </Container>
    </div>)
}