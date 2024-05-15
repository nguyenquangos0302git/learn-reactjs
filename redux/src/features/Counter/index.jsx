import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./counterSlice";

function CounterFeatures() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const handlerIncrease = () => {
    const action = increase();
    dispatch(action);
  };

  const handlerDecrease = () => {
    const action = decrease();
    dispatch(action);
  };

  return (
    <div>
      Counter Features: {counter}
      <div>
        <button onClick={handlerIncrease}>Increase</button>
        <button onClick={handlerDecrease}>Decrease</button>
      </div>
    </div>
  );
}

export default CounterFeatures;
