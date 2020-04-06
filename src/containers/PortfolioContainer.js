import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  displayStocks = () => {
    return this.props.myPortfolio.map((stock) => {
      return <Stock stock={stock} key={stock.cerealNumber} onStockClick={this.props.onStockClick}/>
    })
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h2>My Portfolio</h2>
          {
           this.displayStocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
