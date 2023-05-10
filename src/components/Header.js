import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <div class = "hed"> <h1>Главная</h1></div>
        <nav class="navbar navbar-expand-lg fixed-top ">
          <Link class = "nav-link" to="/">Главная</Link>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
              <ul class="navbar-nav mr-4">
              
                <li class="nav-item">
                  <Link class = "nav-link" to="/itemlist">Каталог</Link>
                </li>
                <li class="nav-item">
                  <Link class = "nav-link" to="/input">Поступления</Link>
                </li>
                <li class="nav-item">
                  <Link class = "nav-link" to="/output">Отгрузки</Link>
                </li>
              </ul>
              
            </div>
        </nav>
        <div class="line"></div>
      </div>
    );
  }
}

export default Header;