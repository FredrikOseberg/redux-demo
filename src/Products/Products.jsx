import React, { Component } from 'react';

class Products extends Component {
  state = {
    productName: ''
  };

  handleChange = e => {
    this.setState({ productName: e.target.value });
  };

  handleAddProduct = () => {
    const { productName } = this.state;
    const { addProduct } = this.props;
    const product = { productName, id: Math.floor(Math.random() * 10) };
    addProduct(product);
  };

  render() {
    const { products } = this.props;
    return (
      <div className="products">
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.handleAddProduct}>Legg til produkt</button>
        <ul>
          {products.map(product => (
            <li key={product.id}>{product.productName}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Products;
