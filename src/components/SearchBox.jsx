import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import Dropdown from "./Dropdown";

const SearchBox = ({ pokemons }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const ref = useRef(null);

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   }
  // })

  // const handleClickOutside = event => {
  //   if (ref.current && !ref.current.contains(event.target)) {
  //     onClickOutside && onClickOutside();
  //   }
  // }

  const onChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form className="search-box">
      <BiSearchAlt className="search-icon" />
      <input
        type="text"
        placeholder="Search pokémon here..."
        value={searchTerm}
        onChange={onChange}
      />
      <div className="auto-search-box">
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
                key={index}
              />
            );
          })}
      </div>
    </form>
  );
};

export default SearchBox;
