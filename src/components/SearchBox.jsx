import React from 'react'
import { BiSearchAlt } from "react-icons/bi";

const SearchBox = ({ handleSearch }) => {
  return (
    <form className="search-box">
        <BiSearchAlt className="search-icon" />
        <input 
          type="text" 
          placeholder="Search pokémon here..." 
          onChange={(event) => handleSearch(event)}
        />
    </form>
  )
}

export default SearchBox;