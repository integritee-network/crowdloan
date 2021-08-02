import React, { useState, useEffect } from "react";
import "./css/App.css";
import { Container, Button, Grid } from "semantic-ui-react";
import icon0 from "./Images/i0.svg";
import icon1 from "./Images/i1.svg";
import icon2 from "./Images/i2.svg";
import icon3 from "./Images/i3.svg";
import icon4 from "./Images/polkadot.png";
import Slider from "react-slick";
import { setActiveLink } from "react-scroll/modules/mixins/scroller";

export default function Participate() {

  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
    let slider1 = []
    let slider2 = []

    useEffect(() => {
      setNav1(slider1)
      setNav2(slider2)
  }, [slider1, slider2])
  const settings = {
    dots: false,
    dotsClass: "slick-dots slick-thumb",
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="participate" id="participate">
      <Container>
        <div className="text">
          <span>3 WAYS TO TAKE PART</span>
          <h1>Participate in the Integritee Crowdloan!</h1>
        </div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={5} className="participate-tabs">
              <Slider
                {...settings}
                className="left-slider"
                asNavFor={nav1}
                ref={slider => (slider2 = slider)}
                slidesToShow={3}
                vertical="true"
                swipeToSlide={true}
                focusOnSelect={true}
              >
                <div>
                  <div className="main">
                    <span>ON THIS SITE</span>
                    <div className="image-holder">
                      <img src={icon0} />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="main">
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
                </div>
                <div>
                  <div className="main">
                    <span>USING POLKADOT-JS APPS</span>
                    <div className="image-holder">
                      <img src={icon4} />
                    </div>
                  </div>
                </div>
              </Slider>
            </Grid.Column>
            <Grid.Column className="right-section" width={10}>
              <Slider {...settings} asNavFor={nav2} ref={slider => (slider1 = slider)}>
                <div>
                  <h2>On this site</h2>
                  <ol>
                    <li>
                      Download the Polkadot Browser extension for Chrome/Firefox{" "}
                      <a href="#">here</a>.
                    </li>
                    <li>
                      Ensure that you have KSM in your Polkadot.js account.
                    </li>
                    <li>
                      Unbond your KSM. See further details <a href="#">here</a>.
                    </li>
                  </ol>
                  <div className="form mb-5">
                    <div className="boxes">
                      <label>KSM to Lock Up:</label>
                      <input text="tel" placeholder="Enter KSM Amount" />
                    </div>
                  </div>
                  <Button className="gradient-btn">Participate Now</Button>
                </div>
                <div>
                  <h2>Through an Exchange</h2>
                  <p>
                    If you hold KSM on a crypto exchange, it may provide
                    functionality to participate in Kusama crowdloans from your
                    user account.{" "}
                  </p>
                  <div className="click">
                    Click on one of the exchanges below for more details:
                  </div>
                  <div className="image-holder">
                    <div className="images">
                      <img src={icon1} />
                    </div>
                    <div className="images">
                      <img src={icon2} />
                    </div>
                    <div className="images">
                      <img src={icon3} />
                    </div>
                  </div>
                </div>
                <div>
                  <h2>Using Polkadot-JS Apps</h2>
                  <ol>
                    <li>
                      Navigate to: <a href="https://polkadot.js.org/apps/">polkadot.js.org/apps/</a>.
                    </li>
                    <li>Follow the instructions detailed in this video:</li>
                  </ol>
                  <div className="video-box">
                    <div className="video-placeholder">
                      <iframe src="https://www.youtube.com/embed/YrTxDufrcQM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                  </div>
                </div>
              </Slider>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
