import React from 'react';

const SearchBar = (props) => {

  const handleChangeSort = event => {
    props.onChooseSort(event.target.value);
  }

  const handleChangeFilter = event => {
    props.onChooseFilter(event.target.value);
  }

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.sortBy === "Alphabetically"} onChange={handleChangeSort}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.sortBy === "Price"} onChange={handleChangeSort}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={handleChangeFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
