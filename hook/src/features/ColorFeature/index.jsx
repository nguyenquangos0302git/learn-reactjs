import React, { useState } from "react";

const LIST_COLOR = ["green", "blue", "orange", "red", "black", "pink"];

const randomIndex = (_) => {
  return Math.floor(Math.random() * LIST_COLOR.length);
};

function ColorFeature(props) {
  const [color, setColor] = useState(() => {
    const colorStore = localStorage.getItem("color");
    return colorStore !== null ? colorStore : "green";
  });
  const handlerColorClick = (_) => {
    const index = randomIndex();
    const newColor = LIST_COLOR[index];
    setColor(newColor);
    localStorage.setItem("color", newColor);
  };
  return (
    <div
      style={{ width: "50px", height: "50px", backgroundColor: color }}
      onClick={handlerColorClick}
    ></div>
  );
}

export default ColorFeature;
