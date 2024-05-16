import React, { Component } from "react";
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";

const toCelsius = (fahrenheit) => {
  return (fahrenheit - 32) / 1.8;
};

const toFahrenheit = (celsius) => {
  return celsius * 1.8 + 32;
};

const convertTemperator = (temperator, func) => {
  const input = parseFloat(temperator);
  if (Number.isNaN(input)) return "";
  return Math.round(func(temperator) * 1000) / 1000;
};

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperator: "",
      scale: "c",
    };
  }

  handleTemperatureChange = (scale) => (value) => {
    this.setState({
      temperator: value,
      scale: scale,
    });
  };

  render() {
    const { temperator, scale } = this.state;

    const celsius =
      scale === "f" ? convertTemperator(temperator, toCelsius) : temperator;
    const fehrenheit =
      scale === "c" ? convertTemperator(temperator, toFahrenheit) : temperator;

    return (
      <div>
        <TemperatureInput
          title="Celsius"
          temperature={celsius}
          onTemperatureChange={this.handleTemperatureChange("c")}
        />
        <TemperatureInput
          title="Fahrenheit"
          temperature={fehrenheit}
          onTemperatureChange={this.handleTemperatureChange("f")}
        />
        <BoilingVerdict celsius={Number(celsius)} />
      </div>
    );
  }
}
