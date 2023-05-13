import React from 'react';

import axios from 'axios';

export default class Products extends React.Component {
  state = {
    products: []
  }
  componentDidMount() {
    //https://cors-anywhere.herokuapp.com/{url}
    axios.get('http://localhost:3002/products')
    //axios.get('http://localhost:3000/t.json')
      .then(res => {
        const products = res.data;
        this.setState({ products });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.ProductName}</li>)}
      </ul>
    )
  }
}

