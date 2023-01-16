import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import homeicon from "../assets/img/homeicon.png";
const Header = ({ handleSearchTerm }) => {
    const [show, setShow] = useState(false);

    const toggleSearch = () => {
        setShow((show) => !show);
    };

    return (
        <header
            className={`${
                show ? "header show-search-box" : "header"
            } container`}
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
            <div className="search-box">
                <BiSearchAlt className="search-icon" />
                <form>
                    <input
                        type="text"
                        placeholder="Search pokémon her..."
                        onChange={(e) => handleSearchTerm(e.target.value, e)}
                    />
                </form>
            </div>
        </header>
    );
};

export default Header;
