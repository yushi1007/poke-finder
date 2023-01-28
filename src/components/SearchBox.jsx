import React from 'react'
import { BiSearchAlt } from "react-icons/bi";

const SearchBox = ({ handleSearch, show, setShow, options, handleAutoSearch, searchTerm, setSearchTerm }) => {
  return (
    <React.Fragment>
    <form className="search-box">
        <BiSearchAlt className="search-icon" onClick={handleSearch} />
        <input 
          type="text" 
          placeholder="Search pokémon here..." 
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
          onClick={() => setShow(show)}
        />
    </form>
    {show && (
        <div className="autoContainer">
          {options
            ?.filter(({name}) => name.indexOf(searchTerm.toLowerCase()) > -1)
            ?.map((option, index) => {
              return (
                <div key={index} onClick={() => handleAutoSearch(option?.name)}>
                  <span>{option.name}</span>
                </div>
              )
            })
          }
        </div>
      )}
    </React.Fragment>
  )
}

export default SearchBox;