import React, { useEffect, useState } from "react";
import useClock from "../../hooks/useClock";

function ColorFeature() {
  const timeString = useClock();
  return <div>{timeString}</div>;
}

export default ColorFeature;
