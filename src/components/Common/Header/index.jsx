import React from 'react'
import "./Header.css";
import { useState } from 'react';
import logo from "../../../common/Images/logo.jpeg";
import { Link } from "react-router-dom";

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    }
    return (
    <div className='mobile-menu-wrapper'>
        <div className={`mobile-menu only-mobile ${showMobileMenu?"overlay":""}`}>
            <div className='mobile-navbar'>
                <div className='mobile-nav-item' onClick={toggleMobileMenu}>
                    <Link to="/">Home</Link>
                </div>
                <div className='mobile-nav-item' onClick={toggleMobileMenu}>
                    <Link to="/projects">Projects</Link>
                </div>
            </div>
        </div>
        <div className='flex max-width header'>
            <Link to="/">
                <img alt="" className='header-logo' src={logo} />
            </Link>
            <div className='only-mobile mobile-menu-button-wrapper'>
            <button className={`hamburger hamburger--spin ${showMobileMenu ? "is-active" : ""}`} type='button' onClick={toggleMobileMenu}>
                <span className='hamburger-box'>
                    <span className='hamburger-inner'></span>
                </span>
            </button>
        </div>
        <div className='non-mobile flex'>
            <Link className='header-nav-item' to="/">Home</Link>
            <Link className='header-nav-item' to="/projects">Projects</Link>
        </div>
      </div>
    </div>
  )
}

export default Header
