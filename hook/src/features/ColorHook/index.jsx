import React from "react";

import useRandomColor from "../../hooks/useRandomColor";

function ColorHook(props) {
  const color = useRandomColor();
  return (
    <div style={{ width: "50px", height: "50px", backgroundColor: color }}>
      {color}
    </div>
  );
}

export default ColorHook;
