import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';
import '../front/style.css';
import axios from 'axios';
import { NavLink } from "react-router-dom";

class ItemList extends Component {
  state = {
    products: []
  }

  render() {
    return (
      <div className="App">
        <Header />
        <h2 align = "left">Каталог</h2>
          <div class = "content">
            {
            this.state.products.map(product =>
                  <div className="App-item">
                  <div class = "item_list">
                      <span><img width="200px" height="200px" align alt={ product.ProductName } src={ product.Image }></img></span>
                      <span class="item" >
                      <NavLink to={'/item/' + product.Id}>{product.ProductName}</NavLink>
                        <br/><br/>
                        Склад: {product.WareName}
                        <br/>
                        Остаток: {product.Quantity} шт.
                        </span>
                  </div>
            </div>    
               )}
        </div>
        <Footer />
      </div>
    );
  }
  componentDidMount() {
    axios.get('http://localhost:3002/productlist')
      .then(res => {
        const products = res.data;
        this.setState({ products });
      })
  }
}

export default ItemList;
