import React, { Component } from "react";
import PropType from "prop-types";

class BoilingVerdict extends Component {
  render() {
    return (
      <div>
        {this.props.celsius >= 100
          ? "The water would boild"
          : "The water would not boild"}
      </div>
    );
  }
}

BoilingVerdict.propTypes = {
  celsius: PropType.number.isRequired,
};

export default BoilingVerdict;
