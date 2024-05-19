import React, { Component } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const createRows = (products, searchText, inStock) => {
  let lastCategory = null;
  const rows = [];
  products.forEach((product) => {
    if (inStock && !product.stocked) {
      return;
    }

    if (product.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          key={product.category}
          category={product.category}
        />
      );
    }
    rows.push(<ProductRow key={product.name} product={product} />);
    lastCategory = product.category;
  });
  return rows;
};

export class ProductTable extends Component {
  render() {
    const { products, searchText, inStock } = this.props;
    const rows = createRows(products, searchText, inStock);
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ProductTable;
