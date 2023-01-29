import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import homeicon from "../assets/img/homeicon.png";
import { getPokedex } from "../api/Api";
import Dropdown from "../components/Dropdown";
import SearchBox from "../components/SearchBox";

const Header = ({ handleSearch, options, searchTerm, setSearchTerm }) => {
  const [show, setShow] = useState(false);

  const toggleSearch = () => {
    setShow((show) => !show);
  };

  const handleAutoSearch = (poke) => {
    setSearchTerm(poke);
    setShow(false);
  };

  return (
    <header
      className={`${show ? "header show-search-box" : "header"} container`}
    >
      <div className="logo">
        <a href="/">
          <img src={homeicon} width="35" height="35" alt="logo" />
          <span>Poké Finder</span>
        </a>
      </div>
      {show ? (
        <MdOutlineClose className="close-icon" onClick={toggleSearch} />
      ) : (
        <BiSearchAlt className="search-icon" onClick={toggleSearch} />
      )}
      <SearchBox
        handleSearch={handleSearch}
        show={show}
        setShow={setShow}
        options={options}
        handleAutoSearch={handleAutoSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </header>
  );
};

export default Header;
