import React from 'react'
import { BiSearchAlt } from "react-icons/bi";

const SearchBox = ({ handleSearch }) => {
  return (
    <form className="search-box">
        <BiSearchAlt className="search-icon" onClick={handleSearch} />
        <input 
          type="text" 
          placeholder="Search pokémon here..." 
          onChange={handleSearch}
        />
    </form>
  )
}

export default SearchBox;