import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
const Header = () => {
  const [show, setShow] = useState(false);

  const toggleSearch = () => {
    setShow((show) => !show);
  };

  return (
    <header className={show ? "header show-search-box" : "header"}>
      <div className="logo">
        <a href="/">Poké Finder</a>
      </div>
      {show ? (
        <MdOutlineClose className="close-icon" onClick={toggleSearch} />
      ) : (
        <BiSearchAlt className="search-icon" onClick={toggleSearch} />
      )}
      <div className="search-box">
        <BiSearchAlt className="search-icon" />
        <input type="text" placeholder="Search pokémon her..." />
      </div>
    </header>
  );
};

export default Header;
