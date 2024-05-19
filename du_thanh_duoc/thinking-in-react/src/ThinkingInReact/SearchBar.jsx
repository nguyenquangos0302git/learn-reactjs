import React, { Component } from "react";

export class SearchBar extends Component {
  handleOnChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };

  render() {
    const { searchText, inStock, onHandleChange } = this.props;

    return (
      <form>
        <input
          type="text"
          placeholder="Search ..."
          value={searchText}
          onChange={onHandleChange("searchText")}
        />
        <div>
          <input
            type="checkbox"
            value={inStock}
            onChange={onHandleChange("inStock")}
          />{" "}
          Only show products in stock
        </div>
      </form>
    );
  }
}

export default SearchBar;
