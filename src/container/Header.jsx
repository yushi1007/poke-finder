import React, { useState } from "react";
import homeicon from "../assets/img/homeicon.png";
import SearchBox from "../components/SearchBox";
import { freezeBody } from "../util/util";
const Header = ({ pokemons }) => {
  const [backdrop, setBackdrop] = useState(false);

  const handleBackDrop = () =>{
    setBackdrop(!backdrop)
    freezeBody(!backdrop)
  }

  return (
  <React.Fragment>
    <header className="header container">
      <div className="logo">
        <a href="/">
          <img src={homeicon} width="35" height="35" alt="logo" />
          <span>Poké Finder</span>
        </a>
      </div>
      <SearchBox pokemons={pokemons} setBackdrop={handleBackDrop} />
    </header>
    {backdrop && <div className="background" onClick={handleBackDrop}></div>}
  </React.Fragment>
  );
};

export default Header;
