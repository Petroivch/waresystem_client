import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div className="App-item">
            <div class = "item_list">
                <img alt={ this.props.name } src={ this.props.image }></img>
            </div>
            <a href={ this.props.id }>{ this.props.name }</a>
      </div>
    );
  }
}

export default Item;