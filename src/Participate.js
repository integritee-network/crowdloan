import './css/App.css'
import { Container, Button, Grid} from 'semantic-ui-react';
import icon0 from './Images/i0.svg';
import icon1 from './Images/i1.svg';
import icon2 from './Images/i2.svg';
import icon3 from './Images/i3.svg';

export default function Participate () {
    
    return (
        <div className="participate">
            <Container>
                <div className="text">
                    <span>2 WAYS TO TAKE PART</span>
                    <h1>Participate in the Integritee Crowdloan!</h1>                    
                </div>
                <Grid>
                        <Grid.Row>
                            <Grid.Column width={5}>
                                <div>
                                    <span>ON THIS SITE</span>
                                    <div className="image-holder">
                                        <img src={icon0} />
                                    </div>
                                </div>
                                <div className="mt-custom">
                                    <span>THROUGH AN EXCHANGE</span>
                                    <div className="image-holder">
                                        <img src={icon1} />
                                    </div>
                                    <div className="image-holder">
                                        <img src={icon2} />
                                    </div>
                                    <div className="image-holder">
                                        <img src={icon3} />
                                    </div>
                                </div>
                            </Grid.Column>
                            <Grid.Column className="right-section" width={10}>
                                <h2>On this site</h2>
                                <ol>
                                    <li>Download the Polkadot Browser extension for Chrome/Firefox <a href="#">here</a>.</li>
                                    <li>Ensure that you have KSM in your Polkadot.js account.</li>
                                    <li>Unbond your KSM. See further details <a href="#">here</a>.</li>
                                </ol>
                                <div className="form mb-5">
                                    <div className="boxes">
                                        <label>KSM to Lock Up:</label>
                                        <input text="tel" placeholder="Enter KSM Amount" />
                                    </div>
                                </div>
                                <Button className="gradient-btn">Participate Now</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
            </Container>
        </div>
    )
}