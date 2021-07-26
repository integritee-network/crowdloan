import "./css/App.css";
import { Container, Button } from "semantic-ui-react";
import GraphImage from "./Images/graph.png";
import Slider from "react-slick";

export default function Main(props) {
  var settings = {
    dots: false,
    infinite: true,
    vertical: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };
  return (
    <div className="why">
      <Container>
        <div className="text">
          <span>WHY OUR PARACHAIN</span>
          <h1>Support Integritee’s Parachain Bids</h1>
          <p>
            Integritee enables developers and firms to process sensitive data,
            without compromising on privacy. Our platform combines the trust of
            blockchain with the confidentiality of off-chain, trusted execution
            environments (TEEs). This enables developers and firms to create
            decentralized data-driven apps and services that can securely
            process sensitive data, without revealing it on chain.
          </p>
          <p>
            The Integritee ecosystem, across all instances on Kusama, Polkadot
            and elsewhere, will be powered by our native token, TEER. Backers
            who support our parachain bids by temporarily locking in KSM will be
            rewarded in TEER.
          </p>
          <p>
            We all know the problems with centralized data services. Integritee
            is the solution. Help us build a new internet where privacy comes as
            standard and earn TEER in the process.
          </p>
          <Button className="outline-btn with-icon">Back Integritee!</Button>
        </div>
        <ul className="counter">
          <li>
            <span>PARTICIPANTS</span>
            16’508
          </li>
          <li>
            <span>KSM CONTRIBUTED</span>
            588’904
          </li>
        </ul>
        <div className="graph">
          <img src={GraphImage} alt="" />
        </div>
        <div className="leaderboard">
          <h2>Leaderboard</h2>
          <div className="sliderdiv">
            <Slider {...settings}>
              <div>
                JBgmTP9EcgF5pU6qgDPo2E1fkUHGwYB278v1j653r45emb9{" "}
                <span>2800.26</span>
              </div>
              <div>
                JBgmTP9EcgF5pU6qgDPo2E1fkUHGwYB278v1j653r45emb9{" "}
                <span>1002.85</span>
              </div>
              <div>
                JBgmTP9EcgF5pU6qgDPo2E1fkUHGwYB278v1j653r45emb9{" "}
                <span>685.20</span>
              </div>
              <div>
                JBgmTP9EcgF5pU6qgDPo2E1fkUHGwYB278v1j653r45emb9{" "}
                <span>586.35</span>
              </div>
              <div>
                JBgmTP9EcgF5pU6qgDPo2E1fkUHGwYB278v1j653r45emb9{" "}
                <span>456.87</span>
              </div>
              <div>
                JBgmTP9EcgF5pU6qgDPo2E1fkUHGwYB278v1j653r45emb9{" "}
                <span>425.32</span>
              </div>
              <div>
                JBgmTP9EcgF5pU6qgDPo2E1fkUHGwYB278v1j653r45emb9{" "}
                <span>352.25</span>
              </div>
              <div>
                JBgmTP9EcgF5pU6qgDPo2E1fkUHGwYB278v1j653r45emb9{" "}
                <span>336.52</span>
              </div>
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
}
