import React from "react";
import PropTypes from "prop-types";
import { useState, useRef } from "react";

CountFeature.propTypes = {};

function CountFeature(props) {
  const [count, setCount] = useState(() => 60);

  let time = useRef();
  console.log(time);

  const startCount = () => {
    time.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    console.log(time);
  };

  const stopCount = () => {
    clearInterval(time.current);
    console.log(time.current);
  };

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={startCount}>Start</button>
      <button onClick={stopCount}>Stop</button>
    </div>
  );
}

export default CountFeature;
