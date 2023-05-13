import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Item extends Component {
  state = {
    product: []
  }
  render() {
    return (
      <div className="App">
      <Header />
      <div className="App-item">
            <div class = "item_details">
              <h1>{this.state.product.ProductName}</h1>
              <img width="500px" height="500px" align alt={ this.state.product.ProductName } src={ "../" + this.state.product.Image }></img>
              <br/>
              <br/>
              <div class = "description">
              { this.state.product.ProductDescription }
              </div>
              <br/>
              <br/>
              <div class = "item_more">Хранение на складе: { this.state.product.WareName }</div>
              <br/>
              <div class = "item_more">Категория: { this.state.product.ProductType }</div>
              <br/>
              <div class = "item_more">Остаток: { this.state.product.Quantity } шт.</div>
              <br/>
              <div class = "item_more">Цена: { this.state.product.Cost } руб.</div>
            </div>
      </div>
      <Footer />
      </div>
    );
  }
  componentDidMount() {
    let link = 'http://localhost:3002/productlist/' + window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    axios.get(link)
      .then(res => {
        const product = res.data;
        this.setState({ product });
      })
  }

}


export default Item;