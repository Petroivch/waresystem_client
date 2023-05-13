import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Home extends Component {
  render() {
    return (
      <div className="App-home">
        <Header />
        <h1>Welcome to the Warehouse system!</h1>
        <Footer />
      </div>
    );
  }
}

export default Home;