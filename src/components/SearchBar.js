import React from 'react';

const SearchBar = (props) => {
  
  const handleSort = (event) => {
    console.log(event.target.value)
    props.sortStocks(event.target.value)
  }

  const handleFilter = (event) => {
    console.log(event.target.value)
    props.filterStocks(event.target.value)
  }

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={null} onChange={handleSort}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={null} onChange={handleSort}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilter}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar; 
