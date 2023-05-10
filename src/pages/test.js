import React from 'react';

import axios from 'axios';

export default class Products extends React.Component {
  state = {
    products: []
  }

  componentDidMount() {
     
    const headers = {
        'Access-Control-Allow-Origin' : '*',
        'Content-Type' : 'application/json;charset=utf-8'
    };
    axios.get(
        'http://localhost:3002/products',
        {headers})
      .then(res => {
        const products = res.data;
        this.setState({ products });
      })
  }

  render() {
    return (
      <div><p>test products {this.state.products}</p>
      <ul>
        { this.state.products.map(product => <li>{product.ProductName}</li>)}
      </ul>
      </div>
    )
  }
}
//delete