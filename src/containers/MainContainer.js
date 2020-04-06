import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      stocks: [],
      portfolio: [],
      filtered: []
    }
  }

  getStocks = () => {
    fetch("http://localhost:3000/stocks")
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        stocks: data,
        filtered: data
      })
    })
  }

  componentDidMount = () => {
    this.getStocks()
  }

  addToPortfolio = (listing) => {
    this.setState(prev => {
      return {
      portfolio: [listing, ...prev.portfolio]
    }
    });
  }

  removeFromPortfolio = (listing) => {
    console.log(listing)
    this.setState(prev => {
      return {
        portfolio: [...prev.portfolio.filter(stock => stock != listing)]
      }
    })
  }

  filterStocks = (type) => {
    this.setState(prev => {
      return {
      filtered: [...prev.stocks.filter(stock => stock.type == type)]
      }
    })
  }

  sort = (howToSort) => {
    if (howToSort == "Alphabetically") {
      this.setState(prev => {
        return {
          filtered: [...prev.stocks.sort(function(a, b) {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
          }
          )]
        }
      })
    }
    if (howToSort == "Price") {
      this.setState(prev => {
        return {
          filtered: [...prev.stocks.sort(function(a, b) {
            if (a.price < b.price) {
              return -1;
            }
            if (a.price > b.price) {
              return 1;
            }
          }
          )]
        }
      })
    }
  }

  render() {
    return (
      <div>
        <SearchBar onSort={this.sort} onFilterStocks={this.filterStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer onAddToPortfolio={this.addToPortfolio} stocks={this.state.filtered}/>

            </div>
            <div className="col-4">

              <PortfolioContainer onRemoveFromPortfolio={this.removeFromPortfolio} portfolio={this.state.portfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
