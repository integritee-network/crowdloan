import './css/App.css';
import { Container, Grid } from 'semantic-ui-react';
import Otherimage from './Images/other-image.png';

export default function How (props) {
  return (
        <div className="white-bg">
            <Container>
                <div className="text">
                    <Grid>
                        <Grid.Row columns={2}>
                        <Grid.Column>
                            <span>HOW PARACHAIN AUCTIONS WORK</span>
                            <h2>The Integritee Kusama <br />Crowdloan Explained</h2>
                            <p>
                            One of the biggest advantages of Kusama is that it enables many
                            decentralized networks to achieve strength in numbers by pooling
                            security resources. Integritee plans to use the shared security and
                            public auditability of Kusama to power our privacy-preserving data
                            services
                            </p>
                            <p>
                            Kusama parachains are leased in slots (lasting 6 weeks each up to a
                            maximum of 48 weeks) to the projects which provide the largest
                            bond in the form of locked-in KSM. Backers can support their favourite projects by locking in KSM for the duration of the lease period.
                            The reason it is called a “crowdloan” is that backers retain full access
                            to their KSM once the lease period ends.
                            </p>
                            <p>
                            Integritee aims to secure its first Kusama parachain by bidding for
                            slots in the <strong>8-12 range</strong>. We will be rewarding KSM holders who
                            support Integritee bids with TEER.
                            </p>
                        </Grid.Column>
                        <Grid.Column>
                            <div className="image">
                                <img src={Otherimage} alt="" />
                            </div>
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </Container>
        </div>
  );
}
