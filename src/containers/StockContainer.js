import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.props.current.map(thisStock => <Stock key={thisStock.id} stock={thisStock} onHandleClick={this.props.onHandleBuy} />)}
      </div>
    );
  }

}

export default StockContainer;
