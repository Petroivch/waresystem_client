import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Home extends Component {
  render() {
    return (
      <div className="App-home">
        <Header />
        <div>Welcome to the Warehouse system!</div>
        <Footer />
      </div>
    );
  }
}

export default Home;