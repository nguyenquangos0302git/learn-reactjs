import React, { PureComponent } from "react";

class SearchBar extends PureComponent {
  state = { term: "" };
  onInputChange(event) {
    this.setState({
      term: event.target.value,
    });
  }
  onInputClick() {
    console.log("Input was clicked");
    console.log(this.state.term);
  }
  onSubmitForm(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onSubmitForm} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onClick={this.onInputClick}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
