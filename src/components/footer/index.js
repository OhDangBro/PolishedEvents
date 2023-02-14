import React from 'react';
import { Icon } from "@material-ui/core";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const Footer = ({handleClick}) => {
  const year = new Date().getFullYear();

  function handleEmailClick() {
    window.location.href = "mailto:polishedeventsco1@gmail.com";
  }



  return (
<footer style={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.5em',
  backgroundColor: "#c3a6a0",
  height: "7vh"
}}>
  <div>
  <a href="https://www.facebook.com/people/Polished-Events/100090351729715/?mibextid=LQQJ4d" target="_blank">
    <Icon style={{ fontSize: "small", color: "white" }}>
      <FacebookIcon />
    </Icon> 
    </a>
    <Icon style={{ fontSize: "small", color: "white" }} onClick={handleEmailClick}>
      <EmailIcon />
    </Icon> 
    <a href="https://www.instagram.com/polishedevents_co/?igshid=YmMyMTA2M2Y%3D" target="_blank">

    <Icon style={{ fontSize: "small", color: "white" }}>
      <InstagramIcon />
    </Icon>
    </a>
    </div>
    <div style={{ color: "white", fontSize: "15px" }}>
  Polished Events &copy; {new Date().getFullYear()}
</div>
</footer>
  );
};

export default Footer;
