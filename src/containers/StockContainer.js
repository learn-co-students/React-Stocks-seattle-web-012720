import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks = () => {
    return this.props.displayStocks.map(stock => {
      return <Stock stock={stock} key={stock.id} onBuyStock={this.props.onBuyStock}/>
    })
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
          {this.renderStocks()}
      </div>
    );
  }

}

export default StockContainer;
