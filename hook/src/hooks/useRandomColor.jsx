import { useEffect, useRef, useState } from "react";

const LIST_COLOR = ["green", "blue", "yellow", "pink", "black", "red"];

function randomColor(oldColor) {
  if (!oldColor) return "green";
  let newColor = Math.floor(Math.random() * LIST_COLOR.length);
  let oldIndex = LIST_COLOR.findIndex((element) => oldColor === element);
  while (newColor === oldIndex) {
    newColor = Math.floor(Math.random() * LIST_COLOR.length);
  }
  return LIST_COLOR[newColor];
}

function useRandomColor() {
  const [color, setColor] = useState(() => {
    return "transparent";
  });

  const oldColor = useRef(null);

  useEffect(() => {
    const timeOut = setInterval(() => {
      const newColor = randomColor(oldColor.current);
      setColor(newColor);
      oldColor.current = newColor;
    }, 1000);
    return () => {
      clearInterval(timeOut);
    };
  }, []);

  return color;
}

export default useRandomColor;
