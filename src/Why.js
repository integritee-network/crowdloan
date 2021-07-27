import './css/App.css';
import { Container, Button } from 'semantic-ui-react';
import GraphImage from './Images/graph.png';
import Slider from 'react-slick';

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function Main (props) {
  const settings = {
    dots: false,
    infinite: true,
    vertical: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1
  };

  const options = {
    animationEnabled: true,
    chart: {
      height: 320,
      renderTo: "container",
      backgroundColor: 'transparent',
      type: "spline",
    },
    title: {
      text: "",
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      type: "datetime",
      month: "%e. %b",
      year: "%b",
      tickWidth: 0,
      lineWidth: 0,
      crosshair: {
        width: 1,
        color: "#fff",
        dashStyle: "solid",
      },
      labels: {
        style: {
          color: "#70e6da",
          textTransform: "uppercase",
          fontWeight: "600",
          fontFamily: "Gotham Rounded",
          paddingTop: "20px",
        },
      },
    },
    yAxis: {
      gridLineColor: "#fff",
      gridLineDashStyle: "solid",
      title: {
        text: "",
      },
      labels: {
        enabled: false,
        style: {
          color: "#70e6da",
          textTransform: "uppercase",
          fontWeight: "600",
          fontFamily: "Gotham Rounded",
          paddingTop: "20px",
        },
      },
    },
    tooltip: {
      shadow: false,
      backgroundColor: "rgba(255,255,255,0.8)",
      borderColor: "none",
      padding: 10,
      borderRadius: "8px",
      className: "chart-tooltip",
    },
    noData: {
      attr: null,
      position: { x: 0, y: 0, align: "center", verticalAlign: "middle" },
      style: { fontSize: "12px", fontWeight: "bold", color: "#60606a" },
    },
    plotOptions: {
      series: {
        marker: {
          fillColor: "#70e6da",
          shadow: false,
          lineWidth: 0,
          width: 20,
          height: 20,
          lineColor: "#fff",
          enabled: false,
        },
      },
    },
    series: [
      {
        showInLegend: false,
        type: "area",
        lineWidth: 1,
        lineColor: "#70e6da",
        fillColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, "rgba(105, 216, 205, 0.95)"], // start
            [0.5, "rgba(105, 216, 205, 0.8)"], // middle
            [1, "rgba(105, 216, 205, 0.1)"], // end
          ],
        },
        data: [
          {x: Date.UTC(2021,0,1), y: 1},
          {x: Date.UTC(2021,1,1), y: 7},
          {x: Date.UTC(2021,2,1), y: 6},
          {x: Date.UTC(2021,3,1), y: 6},
        ],
      },
    ],
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
          <HighchartsReact
              highcharts={Highcharts}
              options={options}
            />
        </div>
      </Container>
    </div>
  );
}
