import React, { Component } from 'react';


import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import ItemList from '../pages/ItemList';

import '../App.css';
import '../front/style.css';
import Input from '../pages/Input';
import Output from '../pages/Output';
import Products from '../pages/test2';

class App extends Component {
    
  render() {
    return (
      <div className="App">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="itemlist" element={<ItemList />} />
          <Route path="input" element={<Input />} />
          <Route path="output" element={<Output />} />
        </Routes>
        <Products/>
      </div>
    );
  }
}

export default App;
