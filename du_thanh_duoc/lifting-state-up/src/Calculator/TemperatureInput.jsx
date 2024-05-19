import React, { Component } from "react";
import PropType from "prop-types";

class TemperatureInput extends Component {
  handleChangeTemperature = (event) => {
    event.preventDefault();
    this.props.onTemperatureChange(event.target.value);
  };

  render() {
    const { title, temperature } = this.props;

    return (
      <fieldset>
        <legend>Enter temperature in {title}</legend>
        <input value={temperature} onChange={this.handleChangeTemperature} />
      </fieldset>
    );
  }
}

TemperatureInput.propTypes = {
  onTemperatureChange: PropType.func.isRequired,
  title: PropType.string.isRequired,
  temperature: PropType.oneOfType([PropType.string, PropType.number]),
};

export default TemperatureInput;
