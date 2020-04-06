import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const URL = "http://localhost:3000/stocks";

class MainContainer extends Component {

  state = {
    sortBy: "Alphabetically",
    filter: "Tech",
    stocks: [],
    portfolio: [],
    portfolioId: 1,
  }

  componentDidMount() {
    fetch(URL)
    .then(resp => resp.json())
    .then(data => {
      this.setState({stocks: data})
    })
  }

  currentStocks = () => {
    const filtered = this.filterStocks();
    return (this.state.sortBy === "Price") ? this.sortStocks(filtered, "price") : this.sortStocks(filtered, "name")
  }

  filterStocks = () => {
    return this.state.stocks.filter(stock => stock.type === this.state.filter)
  }

  sortStocks = (array, param) => {
    return array.sort((a, b) => (a[param] > b[param]) ? 1 : -1)
  }

  chooseSort = sortValue => {
    this.setState({sortBy: sortValue});
  }

  chooseFilter = filterValue => {
    this.setState({filter: filterValue})
  }

  buyStock = stock => {
    this.setState(prev => {
      return ({
        portfolio: [...prev.portfolio, {...stock, portfolioId: prev.portfolioId}],
        portfolioId: prev.portfolioId + 1,
      })
    })
  }

  sellStock = stock => {
    this.setState(prev => {
      return ({
        portfolio: prev.portfolio.filter(thisStock => thisStock !== stock)
      })
    })
  }

  render() {
    return (
      <div>
        <SearchBar sortBy={this.state.sortBy} onChooseSort={this.chooseSort} onChooseFilter={this.chooseFilter} />

          <div className="row">
            <div className="col-8">

              <StockContainer current={this.currentStocks()} onHandleBuy={this.buyStock} />

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} onHandleSell={this.sellStock} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
