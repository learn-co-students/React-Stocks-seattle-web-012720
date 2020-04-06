import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  displayStocks = () => {
    return this.props.userStocks.map(thisStock => {
      return <Stock 
        key={thisStock.id} 
        stock={thisStock}
        actionForStock={this.props.sellStock}
      />
    })
  }

  render() {
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
