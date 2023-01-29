import React from "react";
import homeicon from "../assets/img/homeicon.png";
import SearchBox from "../components/SearchBox";

const Header = ({ pokemons }) => {
  return (
    <header className="header container">
      <div className="logo">
        <a href="/">
          <img src={homeicon} width="35" height="35" alt="logo" />
          <span>Poké Finder</span>
        </a>
      </div>
      <SearchBox pokemons={pokemons}/>
    </header>
  );
};

export default Header;
