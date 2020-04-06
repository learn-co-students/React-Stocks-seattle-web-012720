import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar sortStocks={this.props.sortStocks} filterStocks={this.props.filterStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer shownStocks={this.props.shownStocks} addStock={this.props.addStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer userStocks={this.props.userStocks} sellStock={this.props.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
