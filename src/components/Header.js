import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../assets/logoo.png";
import "./navbar.css";
import { Link } from 'react-router-dom';

// BEM --> Block Element Modifier

const Menu = ({ scrollToWhatwedo }) => (
  <>
    <p>
      <a href="/home" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>Home</a>
    </p>
    {/* <p>
      <a href="/microsoft" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>Success stories</a>
    </p>
    <p>
    <a href="#what-we-do" onClick={scrollToWhatwedo}>What we do</a>
    </p>
    <p>
      <a href="#what-our-clients-say">What our clients say</a>
    </p>
    <p>
      <Link to="/aboutus">New Page</Link> 
    </p> */}
    <p>
    <a href="/contactus" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>Contact us</a>
    </p>
    <p>
    <a href="/work-with-us" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>Work with us</a>
    </p>
  </>
);

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
        <a href="/home" rel="noopener noreferrer">
          <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
