import React, { Component } from "react";
import "./FilterableProductTable.css";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const products = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

const fetchProducts = (_) => Promise.resolve(products);

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      searchText: "",
      inStock: false,
    };
  }

  componentDidMount() {
    fetchProducts().then((response) => {
      this.setState({
        products: response,
      });
    });
  }

  handleOnChange = (name) => (event) => {
    if (name === "searchText") {
      this.setState({
        searchText: event.target.value,
      });
    } else if (name === "inStock") {
      this.setState({
        inStock: event.target.checked,
      });
    }
  };

  render() {
    const { products, searchText, inStock } = this.state;

    return (
      <div className="FilterableProductTable">
        <SearchBar
          searchText={searchText}
          inStock={inStock}
          onHandleChange={this.handleOnChange}
        />
        <ProductTable
          products={products}
          searchText={searchText}
          inStock={inStock}
        />
      </div>
    );
  }
}
