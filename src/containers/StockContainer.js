import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  displayStockList = () => {
    
    return this.props.stocks.map((stock) => {
      return <Stock key={stock.id} stock={stock} onClick={this.props.onClick}/>
    })
  }

  render() {

  const {id, ticker, name, type, price} = this.props.stocks

    return (
      <div>
        <h2>Stocks</h2>
        {
          this.displayStockList()
        }
      </div>
    );
  }

}

export default StockContainer;
