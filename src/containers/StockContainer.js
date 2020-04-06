import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks =() => {
    return this.props.stocks.map(listing => {
      return <Stock onAddToPortfolio={this.props.onAddToPortfolio} key={listing.id} listing={listing}/>
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
