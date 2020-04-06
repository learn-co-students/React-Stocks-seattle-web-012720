import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

  state = {
    stocks: [],
    shownStocks: [],
    userStocks: [],
    nextId: 1
  }

  componentDidMount = () => {
    this.fetchStocks()
  }

  fetchStocks = () => {
    fetch("http://localhost:3000/stocks")
    .then(resp => {
      return resp.json()
    })
    .then(data => {
      this.setState({
        stocks: data,
        shownStocks: data
      })
    })
  }

  addStockToPorflio = (stock) => {
    this.setState(prev => {
      return {
        userStocks: [...prev.userStocks, {...stock, id:prev.nextId}],
        nextId: prev.nextId + 1
      }
    })
    console.log(this.state.userStocks)
  }

  sellStock = (soldStock) => {
    this.setState(prev => {
      return {
        userStocks: prev.userStocks.filter((stock) => stock !== soldStock)
      }
    })
  }

  sortStocks = (choice) => {
    let arr = []
    switch(choice){
      case "Alphabetically":
        arr = this.state.shownStocks.sort((a,b) => a.name > b.name ? 1 : -1)
        break;
      case "Price":
          arr = this.state.shownStocks.sort((a,b) => a.price > b.price ? 1 : -1)
        break;
      default:
        console.log("Nice")
    }
    this.setState({
      shownStocks: arr
    })
  }

  filterStocks = (filter) => {
    
    if(filter === "All") {
      this.setState({
        shownStocks: this.state.stocks
      })
    } else {
      this.setState({
        shownStocks: this.state.stocks.filter(stock => stock.type === filter)
      })
    }
  }


  render() {
    return (
      <div>
        <Header/>
        <MainContainer 
       shownStocks={this.state.shownStocks} 
        userStocks={this.state.userStocks} 
        addStock={this.addStockToPorflio} 
        sellStock={this.sellStock}
        sortStocks={this.sortStocks}
        filterStocks={this.filterStocks}
        />
      </div>
    );
  }
}

export default App;
