import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiAcorn } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import Button from "./button";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const mobileMenuClose = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link className="navbar-logo" to="/" onClick={mobileMenuClose}>
            DEEZ NUTS
            <GiAcorn className="fa-typo3" />
          </Link>
          <div onClick={handleClick} className="menu-icon">
            {click ? (
              <FaTimes className="fa-times" />
            ) : (
              <FaBars className="fa-bars" />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-items">
              <Link
                className="nav-links"
                to="/"
                onClick={mobileMenuClose}
              >
                Home
              </Link>
            </li>
            <li className="nav-items">
              <Link
                className="nav-links"
                to="/services"
                onClick={mobileMenuClose}
              >
                Services
              </Link>
            </li>
            <li className="nav-items">
              <Link
                className="nav-links"
                to="/products"
                onClick={mobileMenuClose}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={mobileMenuClose}
              >
                Sign Up
              </Link>
            </li>
            
          </ul>
          {button && <Button buttonStyle="btn--outline">SignUp</Button>}
        </div>
        
      </nav>
    </>
  );
};

export default Navbar;
