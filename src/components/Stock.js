import React from 'react'


const Stock = (props) => {
  const handleClick = () => {
    if (props.onRemoveFromPortfolio){
      props.onRemoveFromPortfolio(props.listing)
    } else {
      props.onAddToPortfolio(props.listing)
    }
  }


  return (
    <div>

    <div className="card" onClick={handleClick}>
      <div className="card-body">
        <h5 className="card-title">
        {props.listing.name}</h5>
        <p className="card-text">
        {props.listing.ticker}: {props.listing.price}
        </p>
      </div>
    </div>


  </div>
  )
};

export default Stock
