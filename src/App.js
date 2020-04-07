import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

const stocksAPI = 'http://localhost:3000/stocks'

class App extends Component {

  state = {
    stocks: [],
    portfolio: [],
    num: 0,
    sort: null
  }

  componentDidMount() {
    this.fetchStocks()  
  }

  fetchStocks = () => {
    fetch(stocksAPI)
    .then(response => {
      return response.json()
    })
    .then((stocks) => {
      this.setState(previousState => {
        return {
          stocks,
          portfolio: previousState.portfolio,
          num: previousState.num,
          allStocks: stocks
        }
      })
    })
  }
  
  handleSortByAlphabetic = () => {
    console.log("sorting alphabetically")
    this.setState(previousState => {
      let alphaStocks = previousState.stocks.sort((a, b) => a.name > b.name ? 1: -1)
      console.log(alphaStocks)
      return {
        stocks: alphaStocks     
      }
    })
  }
  
  handleSortByPrice = () => {
    console.log("sorting by price")
    this.setState(previousState => {
      let cheapStocks = previousState.stocks.sort((a, b) => a.price > b.price ? 1: -1)
      console.log(cheapStocks)
      return {
        stocks: cheapStocks      
      }
    })
  }

  handleFilterBy = (value) => {
    this.setState(previousState => {
      let filteredStocks = previousState.allStocks.filter(stock => stock.type === value)
      console.log(filteredStocks)
      return {
        stocks: filteredStocks
      }
    })    
  }



  render() {
    return (
      <div>
        <Header/>
        <MainContainer
          onSortByAlphabetic={this.handleSortByAlphabetic}
          onSortByPrice={this.handleSortByPrice}
          onFilterBy={this.handleFilterBy}
          stocks={this.state.stocks}
          portfolio={this.state.portfolio}
          onClick={this.handleClick}
        />
      </div>
    );
  }

  handleClick = (stock) => {
    if (this.state.portfolio.find( oldStock => oldStock.num === stock.num )) {
      this.setState(previousState => {
        return {
          stocks: previousState.stocks,
          portfolio: previousState.portfolio.filter( oldStock => oldStock.num !== stock.num)
        }
      }) 
    } else {
      this.setState(previousState => {
        return {
          stocks: previousState.stocks,
          portfolio: [...previousState.portfolio, {...stock, num: previousState.num+1}],
          num: previousState.num + 1
        }
      })      
    }
  }
  
}


export default App;
