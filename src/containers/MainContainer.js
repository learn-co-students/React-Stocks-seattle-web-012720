import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    displayStocks: [],
    portfolio: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
      .then(resp => {return resp.json()})
      .then(data => {
        this.setState({
          stocks: data,
          displayStocks: data
        })
      })
  }

  buyStock = (stock) => {
    this.setState({
      portfolio: [...this.state.portfolio, stock]
    });
  }
  
  sellStock = (stock) => {
    this.setState({
      portfolio: this.state.portfolio.filter((currentStock) => currentStock !== stock)
    });
  }

  filterStocks = (type) => {
    this.setState({
      displayStocks: this.state.stocks.filter(stock => stock.type === type)
    })
  }

  sortStocks = (sortType) => {
    if (sortType === 'Alphabetically') {
      this.setState({
        displayStocks: this.state.displayStocks.sort((a,b) => a.name > b.name ? 1 : -1)
      })
    } else {
      this.setState({
        displayStocks: this.state.displayStocks.sort((a,b) => a.price > b.price ? 1 : -1)
      })
    }
    
  }

  render() {
    return (
      <div>
        <SearchBar onFilterStocks={this.filterStocks} onSortStocks={this.sortStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer displayStocks={this.state.displayStocks} onBuyStock={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} onSellStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
