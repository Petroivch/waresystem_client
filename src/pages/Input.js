import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

class Input extends React.Component  {
  state = {
    invoices: [],
    products: []
  }
  render() {
    return (
      <div className="App-input">
        <Header />
        <h2 align = "left">Поступления</h2>
        <section>
            <table>
                <tr>
                    <td>Название товара</td>
                    <td>Дата получения</td>
                    <td>Заказчик</td>
                    <td>Количество поступившего товара</td>
                    <td>Склад поступления</td>
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
                  <td>{this.state.invoices.map(invoice => <tr>{invoice.ProductCount}</tr>)}</td>
                  <td>{this.state.invoices.map(invoice => <tr>{invoice.WareName}</tr>)}</td>
                </table>
        </section>
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    axios.get('http://localhost:3002/invoicelist')
      .then(res => {
        const invoices = res.data;
        invoices.forEach(element => {if (element.InvoiceType != "приход" )
						{
              invoices.splice(invoices.indexOf(element),1);
            }
          });
        this.setState({ invoices });
      })
  }
}

export default Input;