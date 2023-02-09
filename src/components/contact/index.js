import React from "react";
import PolishedContact from "../../assets/images/PolishedContact.jpeg"
import { Icon } from "@material-ui/core";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Contact = () => {
  return (
 <div style={{ display: "flex" }}>
  <div style={{ flex: 1, padding: "10px" }}>
    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", paddingTop: "25%" }}>
      <h2 style={{ fontSize: "8rem", fontStyle: "italic", fontFamily: "cursiveFont", fontWeight: "lighter", margin: "0", lineHeight: "2.6rem", paddingBottom: "40px", marginRight: "5px" }}>C</h2>
      <h2 style={{ fontSize: "6rem", fontFamily: "cursiveFont", fontStyle: "italic", fontWeight: "lighter", lineHeight: "2.6rem" }}>ontact Us</h2>
    </div>

    <p style={{ fontSize: "1rem", fontFamily: "regularFont", marginTop: "0", width: "70%", lineHeight: "1.6rem", fontSize: "16px", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>
    If you're located in New Jersey, New York, or Pennsylvania,  let's connect and bring your vision to life. Our team is eager to partner with you and create a once-in-a-lifetime celebration that will leave a lasting impression.
    </p>
    <p style={{ fontSize: "1rem", fontFamily: "regularFont", marginTop: "0", width: "70%", lineHeight: "1.6rem", fontSize: "16px", paddingBottom: "0px", letterSpacing: ".05em", color: "#706d6d" }}>
    <Icon style={{ fontSize: "small", color: "black" }}>
      <LocalPhoneIcon />
    </Icon> 732-555-5555    </p> 
<p style={{ fontSize: "1rem", fontFamily: "regularFont", marginTop: "0", width: "70%", lineHeight: "1.6rem", fontSize: "16px", paddingBottom: "0px", letterSpacing: ".05em", color: "#706d6d" }}>
<Icon style={{ fontSize: "small" }}>
      <EmailIcon  />
    </Icon> polishedeventsco1@gmail.com   </p>
    <p style={{ 
  fontSize: "1rem", 
  textAlign: "center", 
  fontFamily: "regularFont", 
  lineHeight: "1.6rem", 
  letterSpacing: ".05em",  
  paddingBottom: "3px",
  color: "#706d6d",
  display: "flex",
  justifyContent: "left",
  border: "1px solid black",
  paddingLeft: "5px",
  paddingRight: "5px",
  borderRadius: "5px",
  width: "13.5%"
}} >
  Contact Us
</p>
  </div>
  <div className="my-cool-item" style={{ flex: 1, padding: "10px" }}>
    <img src={PolishedContact} alt="Your Image" style={{ width: "80%", boxShadow: "80px -80px 0px 0 #C3A6A0" }} />
  </div>
</div>
    
  );
};

export default Contact;