import React from 'react'
import { BiSearchAlt } from "react-icons/bi";

const SearchBox = () => {
  return (
    <form className="search">
        <BiSearchAlt className="search-icon" />
        <input type="text" placeholder="Search pokémon here..." />
    </form>
  )
}

export default SearchBox;