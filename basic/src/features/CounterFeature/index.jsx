import React, { useState } from 'react';
import PropTypes from 'prop-types';

CounterFeature.propTypes = {
  
};

function CounterFeature(props) {

  const [counter, setCounter] = useState(0);

  const changeCounter = value => {
    value = value + counter;
    setCounter(value);
  }

  return (
    <div>
      <p>{counter}</p>
      <button onClick={ _ => changeCounter(1)}>Increase</button>
      <button onClick={ _ => changeCounter(-1)}>Decrease</button>
    </div>
  );
}

export default CounterFeature;