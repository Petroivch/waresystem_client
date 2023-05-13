import React, { Component } from 'react';


import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import ItemList from '../pages/ItemList';
import Item from '../pages/Item';

import '../App.css';
import '../front/style.css';
import Input from '../pages/Input';
import Output from '../pages/Output';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="itemlist" element={<ItemList />} />
          <Route path="input" element={<Input />} />
          <Route path="output" element={<Output />} />
          <Route path="/item/:Id" element= {<Item/>} />
        </Routes>
      </div>
    );
  }
}

export default App;
