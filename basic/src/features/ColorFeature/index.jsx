import React, {useState} from 'react';
import PropTypes from 'prop-types';

ColorFeature.propTypes = {
  
};

function ColorFeature(props) {

  const [color, setColor] = useState('white');
  
  const changeColor = colorText => {
    setColor(colorText);
  }

  return (
    <div>
      <p>{color}</p>
      <button onClick={ _ => changeColor('black')}>Black</button>
      <button onClick={ _ => changeColor('white')}>White</button>
    </div>
  );
}

export default ColorFeature;