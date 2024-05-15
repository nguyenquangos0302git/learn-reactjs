import React, { useEffect, useState } from "react";

const timeNow = (_) => {
  let time = new Date();
  let hours = `0${time.getHours()}`.slice(-2);
  let minutes = `0${time.getMinutes()}`.slice(-2);
  let second = `0${time.getSeconds()}`.slice(-2);
  return `${hours} : ${minutes} : ${second}`;
};

function useClock() {
  const [timeString, setTimeString] = useState(() => {
    return "";
  });
  useEffect(() => {
    const renderTime = setInterval(() => {
      const time = timeNow();
      setTimeString(time);
    }, 1000);
    return () => {
      clearInterval(renderTime);
    };
  });
  return timeString;
}

export default useClock;
