import React, { useState } from 'react';

import Icon from "../../assets/images/PolishedEventsIcon.svg"

const Navbar = ({ currentPage, handleClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (page) => {
    handleClick(page);
    setIsOpen(false);
  };

  

  return (
    <nav style={{
        height: '10vh',
        background: '#c3a6a0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1
        }}>
       <div className="icon">
    <img src={Icon} style={{height: "9vh"}} className="navIcon" alt="icon" />
  </div>
      <button className="hamburger" onClick={toggleNav}>&#9776;</button>
      <div className={`navbar-collapse ${isOpen ? "show" : ""}`}>
<a className="navLink" href="#Home" style={{ fontSize: "1rem", paddingRight:"2%", fontFamily: "regularFont", fontStyle: "italic", textDecoration: "none", marginTop: "0", width: "95%", lineHeight: "1.6rem", fontSize: "16px", letterSpacing: ".05em", color: "#706d6d", marginBottom: '20px' }} onClick={() => handleLinkClick('Home')}>Home</a>
<a className="navLink" href="#Services" style={{ fontSize: "1rem", paddingRight:"2%", fontFamily: "regularFont", fontStyle: "italic", textDecoration: "none", marginTop: "0", width: "95%", lineHeight: "1.6rem", fontSize: "16px", letterSpacing: ".05em", color: "#706d6d", marginBottom: '20px' }} onClick={() => handleLinkClick('Services')}>Services</a>
<a className="navLink" href="#About" style={{ fontSize: "1rem", paddingRight:"2%", fontFamily: "regularFont", fontStyle: "italic", textDecoration: "none", marginTop: "0", width: "95%", lineHeight: "1.6rem", fontSize: "16px", letterSpacing: ".05em", color: "#706d6d", marginBottom: '20px' }} onClick={() => handleLinkClick('About')}>About</a>
<a className="navLink" href="#Contact" style={{ fontSize: "1rem", paddingRight:"2%", fontFamily: "regularFont", fontStyle: "italic", textDecoration: "none", marginTop: "0", width: "95%", lineHeight: "1.6rem", fontSize: "16px", letterSpacing: ".05em", color: "#706d6d", marginBottom: '20px', paddingRight: "30px" }} onClick={() => handleLinkClick('Contact')}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
