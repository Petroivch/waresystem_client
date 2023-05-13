import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

class Output extends Component {
  state = {
    invoices: []
  }
  render() {
    return (
      <div className="App-input">
        <Header />
        <h2 align = "left">Отгрузки</h2>
        <section>
            <table>
                <tr>
                <td>Название товара</td>
                    <td>Дата отгрузки</td>
                    <td>Заказчик</td>
                    <td>Количество отгруженного товара</td>
                    <td>Склад отгрузки</td>
                </tr>
                  <td>
                    {this.state.invoices.map(invoice => <tr>{invoice.ProductName}</tr>)}
                  </td>
                  <td>
                    {this.state.invoices.map(invoice => <tr>{invoice.Date}</tr>)}
                  </td>
                  <td>
                    {this.state.invoices.map(invoice => <tr>{invoice.UserName}</tr>)}
                  </td>
                  <td>
                    {this.state.invoices.map(invoice => <tr>{invoice.ProductCount}</tr>)}
                  </td>
                  <td>
                    {this.state.invoices.map(invoice => <tr>{invoice.WareName}</tr>)}
                  </td>
                </table>
        </section>
        <Footer />
      </div>
    );
  }
  componentDidMount() {
    //https://cors-anywhere.herokuapp.com/{url}
    axios.get('http://localhost:3002/invoicelist')
    //axios.get('http://localhost:3000/t.json')
      .then(res => {
        const invoices = res.data;
        for (let i = 0; i < invoices.length; i++) {
          invoices.forEach(element => {if (element.InvoiceType == "приход" )
          {
            invoices.splice(invoices.indexOf(element),1);
          }
        });
        }
        this.setState({ invoices });
      })
  }
}

export default Output;