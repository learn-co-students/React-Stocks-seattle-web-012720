import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor(){
    super()

    this.state ={
      stocks: [],
      myPortfolio: [],
      cerealNumber: 1,
      displayStocks: []
    }
  }

  componentDidMount(){
    this.getStocks()
  }


  getStocks = () => {
    fetch("http://localhost:3000/stocks")
    .then (res => res.json())
    .then((theseStocks)=>{
      this.setState({
        stocks: theseStocks,
        displayStocks: theseStocks
      })
    })
  }

  buyStock = (boughtStock) => {
    this.setState(prev => {
      return {
        myPortfolio: [...prev.myPortfolio, {...boughtStock, cn: prev.cerealNumber}],
        cerealNumber: prev.cerealNumber+1 
      }
    })
  }

  sellStock = (soldStock) => {
    this.setState(prev => {
      return {
        myPortfolio: prev.myPortfolio.filter((thisStock) => thisStock !== soldStock)
      }
    })
    
  }

filter = (type) => {
  if (type !== "All"){
    this.setState({
      displayStocks: this.state.stocks.filter(stock => stock.type === type)
    })
  }else{
    this.setState({
      displayStocks: this.state.stocks
    })
  }
}

sortAlpha = () => {
  this.setState(prev=> {
    return {
      stocks: prev.stocks.sort((a,b) => {
        return (a.ticker < b.ticker)? - 1: (a.ticker > b.ticker) ? 1: 0
      }
      )
    }
  })
}

sortPrice = () => {
  this.setState(prev=> {
    return {
      stocks: prev.stocks.sort((a,b) => {
        return (a.price < b.price)? - 1: (a.price > b.price) ? 1: 0
      }
      )
    }
  })
}





  render() {
  
    return (
      <div>
        <SearchBar sortAlpha={this.sortAlpha} sortPrice={this.sortPrice} filter={this.filter}/>

          <div className="row">
            <div className="col-8">
             <StockContainer stocks={this.state.displayStocks} onStockClick={this.buyStock}/> 
              

            </div>
            <div className="col-4">

              <PortfolioContainer myPortfolio={this.state.myPortfolio} onStockClick={this.sellStock} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
