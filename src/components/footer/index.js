import React from 'react';
import { Icon } from "@material-ui/core";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const Footer = ({handleClick}) => {
  const year = new Date().getFullYear();

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
  <div> <Icon style={{ fontSize: "small", color: "white" }}>
      <FacebookIcon />
    </Icon> <Icon style={{ fontSize: "small", color: "white" }}>
      <EmailIcon />
    </Icon> <Icon style={{ fontSize: "small", color: "white" }}>
      <InstagramIcon />
    </Icon></div>
    <div style={{ color: "white", fontSize: "15px" }}>
  Polished Events &copy; {new Date().getFullYear()}
</div>
</footer>
  );
};

export default Footer;
