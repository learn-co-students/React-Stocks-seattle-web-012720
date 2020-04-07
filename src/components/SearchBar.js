import React from 'react';

const SearchBar = (props) => {

  const handleSortByAlphabetic = () => {
    // console.log("sorting in component")
    // console.log(checkedSort)
    if (checkedSort == 1) {
      // console.log("changing from 1 to null")
      checkedSort = 0
    } else {
      // console.log("changing from null to 1")
      checkedSort = 1
    }
    // props.sort = checkedSort
    // console.log(props.sort)
    props.onSortByAlphabetic()
  }
  const handleSortByPrice = () => {
    // console.log("filtering in component")
    checkedSort = 1
    props.onSortByPrice()
  }

  const handleFilterBy = (event) => {
    props.onFilterBy(event.target.value)
  }

  let checkedSort = null

  return (
    <div>
      <div>
        <strong>Sort by:</strong>
        <label>
          <input type="radio" name="dot" value="Alphabetically" checked={checkedSort} onChange={handleSortByAlphabetic}/>
          Alphabetically
        </label>
        <label>
          <input type="radio" name="dot" value="Price" checked={null} onChange={handleSortByPrice}/>
          Price
        </label>
        <br/>
      </div>
      <div>
        <label>
          <strong>Filter:</strong>
          <select onChange={handleFilterBy}>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>
      </div>

    </div>
  );
}


export default SearchBar;
