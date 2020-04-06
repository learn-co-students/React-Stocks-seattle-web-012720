import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  displayStocks = () => {
    return this.props.stocks.map((stock) => {
      return <Stock stock={stock} key={stock.id} onStockClick={this.props.onStockClick}/>
    })
  }
  render() {
    console.log(this.props)
     return (
      <div>
        <h2>Stocks</h2>
        {
          this.displayStocks()
        }
      </div>
    );
  }

}

export default StockContainer;
