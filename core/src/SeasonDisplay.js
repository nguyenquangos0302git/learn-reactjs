<<<<<<< HEAD
import React from "react";
=======
import React from 'react';
import 'semantic-ui-css/semantic.min.css';

const seasonConfig = {
  summer: {
    text: 'Lets hit the beach!',
    icon: 'sun',
  },
  winter: {
    text: 'Burr, it is chilly',
    icon: 'snowflake',
  },
};
>>>>>>> e320e04559d0d70f1506e878730cf612a72ebc79

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const { lat } = props;
  const season = getSeason(lat, new Date().getMonth());
<<<<<<< HEAD
  console.log(season);
  return <div>Season</div>;
=======
  const { text, icon } = seasonConfig[season];

  return (
    <div>
      <i className={`${icon} loading icon`}></i>
      <h1>{text}</h1>
    </div>
  );
>>>>>>> e320e04559d0d70f1506e878730cf612a72ebc79
};

export default SeasonDisplay;
