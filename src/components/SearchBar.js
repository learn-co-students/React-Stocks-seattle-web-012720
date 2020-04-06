import React from 'react';

const SearchBar = (props) => {

const handleFilter = (event) => {
  props.onFilterStocks(event.target.value)
}

const handleSort = (event) => {
  props.onSort(event.target.value)
}

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={null} onChange={event => handleSort(event)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={null} onChange={event => handleSort(event)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={event => handleFilter(event)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
