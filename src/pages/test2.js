import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    //https://cors-anywhere.herokuapp.com/{url}
    axios.get('http://192.168.8.112:3002/products')
    //axios.get('http://localhost:3000/t.json')
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
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
//delete