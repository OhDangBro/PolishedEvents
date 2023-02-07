import React from 'react';
import InstaIcon from "../../assets/images/instagram.png"

const Footer = ({handleClick}) => {
  const year = new Date().getFullYear();

  return (
<footer style={{display: 'flex', justifyContent: 'center', padding: '0.5em', backgroundColor: "#c3a6a0", height: "7vh"}}>
  <a style={{flex: 1, textDecoration: 'none', color: "black", fontSize: "10px", marginTop: "5px"}} href="mailto:polishedeventsco1@gmail.com">Contact</a>     
  <div style={{flex: .8, display: 'flex', alignItems: 'center', fontSize: "10px", }}>
    <a target="_blank" href="https://www.instagram.com/polishedevents_co/?igshid=YmMyMTA2M2Y%3D">
      <img src={InstaIcon} alt="Instagram Icon" style={{width: '20px', height: '20px', marginRight: '5px'}} />
    </a>
  </div>
  <div style={{flex: .3, display: 'flex', alignItems: 'center', fontSize: "8px", }}>&copy; Polished Event {year}</div>
</footer>
  );
};

export default Footer;
