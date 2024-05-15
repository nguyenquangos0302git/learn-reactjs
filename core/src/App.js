import React, { PureComponent } from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends PureComponent {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  componentDidUpdate() {}

  renderContent() {
    if (this.state.errorMessage || this.state.lat) {
      if (this.state.errorMessage && !this.state.lat) {
        return <div>Error: {this.state.errorMessage}</div>;
      } else {
        return <SeasonDisplay lat={this.state.lat} />;
      }
    } else {
      return <Spinner message="Allow Please" />;
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default App;
