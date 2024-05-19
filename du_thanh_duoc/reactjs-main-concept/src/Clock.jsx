import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: {
        created: new Date().toTimeString(),
      },
      second: {
        time: new Date().toTimeString(),
      },
    };
  }

  getTime = (_) => {
    const newState = {
      ...this.state,
      time: {
        created: new Date().toTimeString(),
      },
    };

    this.setState(newState);
  };

  render() {
    return (
      <div>
        {{}}
        <h1>{this.state.time.created}</h1>
        <button onClick={this.getTime}>Get Time</button>
      </div>
    );
  }
}

export default Clock;
