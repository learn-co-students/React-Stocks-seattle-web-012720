import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  displayPortfolio = () => {
    return this.props.portfolio.map((myStock) => {
      return <Stock key={myStock.id} stock={myStock} onClick={this.props.onClick}/>
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.displayPortfolio()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
