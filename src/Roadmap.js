import './css/App.css';
import { Container, Button, Grid } from 'semantic-ui-react';
import icon0 from './Images/i0.svg';
import icon1 from './Images/i1.svg';
import icon2 from './Images/i2.svg';
import icon3 from './Images/i3.svg';

export default function Participate () {
  return (
        <div className="roadmap">
            <Container>
                <div className="text">
                    <h1>Integritee’s <br /> Roadmap</h1>
                </div>
                <div className="timeline">
                    <div><ul>
                        <li>Encointer whitepaper release.</li>
                        <li>Beginning of the SubstraTEE journey.</li>
                    </ul> <span>2018</span></div>
                    <div>
                    <ul>
                        <li>First public demonstration of private token transactions.</li>
                        <li>Secured Web3 grants to develop transaction privacy using Intel SGX, and Substrate Rust API</li>
                    </ul>
                    <span>2019</span>
                    </div>
                    <div>
                    <ul>
                        <li>Q1 <br /> Web3 grant for SubstraTEE extension pack.</li>
                        <li>Q2 <br /> Developed prototype platform &amp; deployed first use case: Encointer.</li>
                        <li>Q3 <br /> Secured Polkadot Treasury grant for “SubstraTEE scalability”</li>
                    </ul>
                    <span>2020</span>
                    </div>
                    <div>
                    <ul>
                        <li>Q1 <br /> Rococo test-net parachain deployment.</li>
                        <li>Q2 <br /> DClosed seed round.</li>
                        <li>Q3 <br /> Whitepaper and Token Paper released.</li>
                        <li>Participate in Kusama slot auctions.</li>
                        <li>Main-net &amp; TEER token launch.</li>
                        <li>Release sidechains with smart contracts.</li>
                    </ul>
                    <span>2021</span>
                    </div>
                    <div>
                    <ul>
                        <li>Deploy first enterprise PoCs.</li>
                        <li>Decentralize and establish the Governance Council.</li>
                        <li>Establish a multi-environment TEER token.</li>
                        <li>Implement fee burning and lockdrop mechanisms</li>
                        <li>Forge partnerships with international institutions and universities.</li>
                        <li>Issue Treasury grants to expand the Integritee ecosystem and community.</li>
                        <li className="active">Establish Integritee as the leading Polkadot privacy solution.</li>
                    </ul>
                    <span>2022 and beyond</span>
                    </div>
                </div>

            </Container>
        </div>
  );
}
