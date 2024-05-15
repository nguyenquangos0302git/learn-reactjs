import React, { Component } from 'react';

class ProductItem extends Component {
  render() {
    const { product } = this.props;
    return (
      <div>
        <input />
        {product.name}
      </div>
    );
  }
}

export default ProductItem;
