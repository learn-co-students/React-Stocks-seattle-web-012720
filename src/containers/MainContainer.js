import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar
          onSortByAlphabetic={this.props.onSortByAlphabetic}
          onSortByPrice={this.props.onSortByPrice}
          onFilterBy={this.props.onFilterBy}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer
                stocks={this.props.stocks}
                onClick= {this.props.onClick}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.props.portfolio} onClick={this.props.onClick}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
