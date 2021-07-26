import "./css/App.css";
import { Container, Grid } from "semantic-ui-react";
import clientimage from "./Images/client.svg";
import GFS from "./Images/GFS.png";
import CDI from "./Images/CDI.png";
import NGCVenture from "./Images/NGC-Venture.png";
import sventures from "./Images/7xventures.png";
import Hotbit from "./Images/Hotbit.png";
import Kryptonite from "./Images/Kryptonite.png";
import alvesAdventure from "./Images/alves-adventure.png";

export default function Clients(props) {
  return (
    <div className="white-bg-2 clients">
      <Container>
        <div className="text">
          <span>OUR COLLABORATORS</span>
          <div className="image-holder">
            <img src={clientimage} />
          </div>
          <div className="image-holder">
            <img src={clientimage} />
          </div>
          <div className="image-holder">
            <img src={clientimage} />
          </div>
          <div className="image-holder">
            <img src={clientimage} />
          </div>
          <div className="image-holder">
            <img src={clientimage} />
          </div>
          <div className="image-holder">
            <img src={clientimage} />
          </div>
          <div className="image-holder">
            <img src={clientimage} />
          </div>
        </div>
        <div className="text">
          <span>OUR INVESTORS</span>
          <div className="image-holder">
            <img src={CDI} />
          </div>
          <div className="image-holder">
            <img src={NGCVenture} />
          </div>
          <div className="image-holder">
            <img src={alvesAdventure} />
          </div>
          <div className="image-holder">
            <img src={sventures} />
          </div>
          <div className="image-holder">
            <img src={GFS} />
          </div>
          <div className="image-holder">
            <img src={Kryptonite} />
          </div>
          <div className="image-holder">
            <img src={Hotbit} />
          </div>
        </div>
      </Container>
    </div>
  );
}
