import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderStocks = () => {
    return this.props.portfolio.map(stock => {
      return <Stock stock={stock} key={stock.id} onSellStock={this.props.onSellStock}/>
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.renderStocks()}
      </div>
    );
  }

}

export default PortfolioContainer;
