import React from 'react'

const Stock = (props) => {
  const {name, price} = props.stock;

  const handleClick = () => props.onHandleClick(props.stock)

  return (
    <div>

      <div className="card">
        <div className="card-body" onClick={handleClick} >
          <h5 className="card-title">{
              name
            }</h5>
          <p className="card-text">{
              price
            }</p>
        </div>
      </div>


    </div>
  )
};

export default Stock
