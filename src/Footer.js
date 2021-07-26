import './css/App.css';
import { Container, Menu } from 'semantic-ui-react';
import icon0 from './Images/i0.svg';
import { AiOutlineTwitter } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';

export default function Footer () {
  return (
        <div className="footer">
            <Menu
                tabular
                className="main-menu"
                >
                <Container>
                    <Menu.Menu className="logo">
                    <img src={icon0} width={400} />
                    </Menu.Menu>
                    <Menu.Menu position='right'>
                    <Menu.Item
                        name='Crowdloan Campaign'
                    />
                    <Menu.Item
                        name='Particpate'
                    />
                    <Menu.Item
                        name='About'
                    />
                    <Menu.Item
                        name='FAQ'
                    />
                    </Menu.Menu>
                </Container>
                </Menu>

                <Container className="part-btn-holder">
                    <a className="ui primary button" href="#contribute">Participate Now!</a>
                </Container>
                <Container className="footer-bottom">
                    <div className="social">
                        <ul>
                            <li><AiOutlineTwitter /></li>
                            <li><GrLinkedinOption /></li>
                        </ul>
                    </div>
                    <div className="bottom-nav">
                        <ul>
                            <li>Impressum</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </Container>
        </div>
  );
}
