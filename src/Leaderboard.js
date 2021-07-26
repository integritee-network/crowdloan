import React, { useState, useEffect } from 'react';
import Slider from "react-slick";

export default function Leaderboard () {
  const [allDataLoaded, setAllDataLoaded] = useState(false);
  const [contributors, setContributors] = useState(new Map());
  const [contributorsUnsorted, setContributorsUnsorted] = useState(new Map());
  const contributorsProperty = new Map();
  var settings = {
    dots: false,
    infinite: true,
    vertical: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1
  };

  //fetch contributors
  useEffect(() => {
    function makeApiCall (page) {
      console.log(page);
      return fetch('https://kusama.api.subscan.io/api/scan/parachain/contributes'
        , {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-API-Key': 'f61b3cd451cee62383692c528215d12c',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            row: 100,
            page: page,
            from_history: true,
            para_id: 2004
          })
        }
      );
    }

    async function processUsers () {
      let result;
      for (let i = 0; i < 150; i++) {
        result = await makeApiCall(i).then(res => res.json());
        if (result && result.data && result.data.contributes !== undefined) { var contributes = result.data.contributes; }
        if (contributes !== null) {
          {
            contributes.map(i => {
              //add accounts and amount contributed
              if (!contributorsProperty.has(i.who)) {
                contributorsProperty.set(i.who, i.contributed * Math.pow(10, -12));
              }
            });

          }
        } else {
          console.log('all data filled');
          setContributorsUnsorted(contributorsProperty);
          setAllDataLoaded(true);
          break;
        }
      }
    }

    async function doTask () {
      await processUsers();
    }
    doTask();
  }, []);

  useEffect(() => {
    if (allDataLoaded) {
      // sort by value
      const mapSort = new Map([...contributorsUnsorted.entries()].sort((a, b) => b[1] - a[1]));
      // console.log("sortedMap", mapSort);
      setContributors(mapSort);
    }
  }, [allDataLoaded]);

  const numbers = new Map(
  );
  numbers.set('man1', 2);
  numbers.set('man2', 3);
  numbers.set('man3', 4);
  // Object.entries(numbers).map(([key, value]) => console.log(key, value));
  // numbers.forEach((value, key) => {
  //   console.log(key + " = " + value);
  // })
  return (
    <div className="why">
      <div className="leaderboard">
        <h2>Leaderboard</h2>
        <div className="sliderdiv">
          {allDataLoaded
            ? (<div>
              <Slider {...settings}>
                {Array.from(contributors).map(([key, value]) => <div>{key} <span>{value}</span></div>)}
              </Slider>
            </div>
            )
            : <p>loading</p>
          }
        </div>
      </div>
    </div>
  );
}