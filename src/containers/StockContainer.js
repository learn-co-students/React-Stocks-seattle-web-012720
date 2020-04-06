import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  displayStocks = () => {
    return this.props.shownStocks.map(thisStock => {
      return <Stock 
        key={thisStock.id} 
        stock={thisStock}
        actionForStock={this.props.addStock}
      />
    })
  }

  render() {
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
