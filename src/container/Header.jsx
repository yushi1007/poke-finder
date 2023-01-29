import React, { useState } from "react";
import homeicon from "../assets/img/homeicon.png";
import SearchBox from "../components/SearchBox";

const Header = ({ pokemons }) => {
  const [backdrop, setBackdrop] = useState(false);

  return (
  <React.Fragment>
    <header className="header container">
      <div className="logo">
        <a href="/">
          <img src={homeicon} width="35" height="35" alt="logo" />
          <span>Poké Finder</span>
        </a>
      </div>
      <SearchBox pokemons={pokemons} setBackdrop={setBackdrop} />
    </header>
    {backdrop && <div className="background"></div>}
  </React.Fragment>
  );
};

export default Header;
