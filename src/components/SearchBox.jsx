import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import Dropdown from "./Dropdown";

const SearchBox = ({ pokemons, setBackdrop }) => {
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  })

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShow(false);
    }
  }

  const onChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    setShow(!show);
    setBackdrop();
  }

  return (
    <form ref={ref} className="search-box">
      <BiSearchAlt className="search-icon" />
      <input
        type="text"
        onClick={handleSearchClick}
        placeholder="Search pokémon here..."
        value={searchTerm}
        onChange={onChange}
      />
     {show && <div className="auto-search-box">
        {pokemons
          ?.filter((pokemon) => {
            const searchName = searchTerm.toLowerCase();
            const fullName = pokemon?.name.toLowerCase();
            return (
              searchName &&
              fullName.startsWith(searchName) &&
              fullName !== searchName
            );
          })
          ?.slice(0, 10)
          ?.map((pokemon, index) => {
            return (
              <Dropdown 
                pokemon={pokemon}
                setShow={setShow}
                setBackdrop={setBackdrop}
                key={index}
              />
            );
          })}
      </div>}
    </form>
  );
};

export default SearchBox;
