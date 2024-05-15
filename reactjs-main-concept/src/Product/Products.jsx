import React, { Component } from 'react';
import ProductItem from './ProductItem';

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          id: '1a',
          name: 'Sony',
        },
        {
          id: '2b',
          name: 'Samsung',
        },
        {
          id: '3c',
          name: 'Apple',
        },
      ],
    };
  }

  orderProducts = (_) => {
    this.setState((prevState) => ({
      items: prevState.items.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }),
    }));
  };

  addProduct = (_) => {
    this.setState((prevState) => ({
      items: [
        {
          id: '4d',
          name: 'Huway',
        },
        ...prevState.items,
      ],
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.orderProducts}>sort</button>
        <button onClick={this.addProduct}>add</button>
        {this.state.items.map((item, index) => (
          <ProductItem product={item} key={item.id} />
        ))}
      </div>
    );
  }
}

export default Products;
