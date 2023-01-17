import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import homeicon from "../assets/img/homeicon.png";
import { getPokedex } from "../api/Api";
import Dropdown from "../components/Dropdown";

const Header = ({ handleSearch }) => {
    const [show, setShow] = useState(false);
    const [pokedex, setPokedex] = useState([]);

    const toggleSearch = () => {
        setShow((show) => !show);
    };

    const getPokedexData = async () => {
        let pokedexData = await getPokedex();
        console.log(pokedexData);
        if (pokedexData) {
            setPokedex(pokedexData);
        }
    };

    useEffect(() => {
        getPokedexData();
    }, []);

    return (
        <header
            className={`${
                show ? "header show-search-box" : "header"
            } container`}
        >
            <div className="headerContainer">
                <div className="logo">
                    <a href="/">
                        <img src={homeicon} width="35" height="35" alt="logo" />
                        <span>Poké Finder</span>
                    </a>
                </div>
                {show ? (
                    <MdOutlineClose
                        className="close-icon"
                        onClick={toggleSearch}
                    />
                ) : (
                    <BiSearchAlt
                        className="search-icon"
                        onClick={toggleSearch}
                    />
                )}
                <div className="search-box">
                    <BiSearchAlt className="search-icon" />
                    <form>
                        <input
                            type="text"
                            placeholder="Search pokémon her..."
                            onChange={(event) => handleSearch(event)}
                        />
                    </form>
                </div>
            </div>
            <Dropdown data={pokedex}/>
        </header>
    );
};

export default Header;
