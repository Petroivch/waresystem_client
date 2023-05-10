import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Item from '../components/Item';


import '../App.css';
import '../front/style.css';

class ItemList extends Component {

  render() {
    console.log(getItems());

    return (
      <div className="App">
        <Header />
          <div class = "content">
          <section>
            <Item name="Logitech Pebble M350" image="LogitechPebbleM350.jpg" id="1" />
            <Item name="Logitech Pebble M351" image="LogitechPebbleM350.jpg" id="2" />
            <Item name="Logitech Pebble M352" image="LogitechPebbleM350.jpg" id="3" />
            <Item name="Logitech Pebble M353" image="LogitechPebbleM350.jpg" id="4" />
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ItemList;

function getItems() {
    return fetch('http://localhost:3002/products')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
 }