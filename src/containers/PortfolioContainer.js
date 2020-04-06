import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderPortfolio = () => {
    if (!!this.props.portfolio){
      return this.props.portfolio.map(listing => {
        return <Stock listing={listing} onRemoveFromPortfolio={this.props.onRemoveFromPortfolio}/>
      })
    }
  }
  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.renderPortfolio()}
      </div>
    );
  }

}

export default PortfolioContainer;
