import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Output extends Component {
  render() {
    return (
      <div className="App-input">
        <Header />
        <section>
            <table>
                <tr>
                    <td>Id товара</td>
                    <td>Тип товара</td>
                    <td>Название товара</td>
                    <td>Производитель</td>
                    <td>Количество отгруженного товара</td>
                    <td>Количество на складе</td>
                </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Output;