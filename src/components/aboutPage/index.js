import React from "react";
import PolishedOne from "../../assets/images/PolishedOne.jpeg"
import { Container } from "@mui/system";
import CssBaseline from '@mui/material/CssBaseline';

const AboutPage = () => {
  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth='xl'>
    
    <div style={{ display: "flex", alignItems: "center", height: "92h", justifyContent: "center" }}>
      <div style={{ flex: .8, paddingBottom: "250px", paddingRight: "200px", height: "100%", }}>
      <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", width: "100%", paddingTop: "60%" }}>
      <h2 style={{ fontSize: "8rem", fontStyle: "italic", fontFamily: "cursiveFont", fontWeight: "lighter", margin: "0", lineHeight: "2.6rem", paddingBottom:"40px", marginRight:"5px", textAlign: "center" }}>A</h2>
      <h2 style={{ fontSize: "6rem", fontFamily: "cursiveFont", fontStyle: "italic", fontWeight: "lighter", lineHeight: "2.6rem", textAlign: "center" }}>bout</h2>
    </div>
    <p style={{ fontSize: "1rem", fontFamily: "regularFont", marginTop: "0", width: "100%", lineHeight: "1.6rem", fontSize: "16px", paddingBottom:"10px", letterSpacing: ".05em", color:  "#706d6d", textAlign: "left" }}>
          Polished Events elevates events with their exceptional event design and planning services. With a focus on creating personalized and unforgettable experiences, we expertly attend to every detail and stay within budget. Let us help plan your next memorable occasion.
        </p>
        <p style={{ fontSize: "1rem", fontFamily: "regularFont", width: "100%", lineHeight: "1.6rem", fontSize: "16px", letterSpacing: ".05em", color:  "#706d6d", textAlign: "left" }}>
          We are dedicated to delivering exceptional event design and planning services for all of life's special moments. We guarantee that your event will be nothing short of extraordinary.
        </p>
        <p style={{ 
  fontSize: "1rem", 
  textAlign: "center", 
  fontFamily: "regularFont", 
  lineHeight: "1.6rem", 
  letterSpacing: ".05em",  
  paddingBottom: "10px", 
  color: "#706d6d",
  display: "flex",
  justifyContent: "left",
  
}} >
  Contact Us   <hr className="verticalLine" style={{
    width: "5.5%",
    height: "2px",
    border: "1px solid #c3a6a0",
    marginLeft: "1px",
    marginTop: "3%"
  }}
  />
</p>
    </div>
      <div className="my-cool-item" style={{ flex: 1, padding: "10px", height: "100%", textAlign: "center", paddingTop: "20%" }}>
        <img src={PolishedOne} alt="Your Image" style={{ width: "100%", boxShadow: "80px -80px 0px 0 #C3A6A0" }} />
      </div>
    </div>
    </Container>
      </React.Fragment>
  );
};

export default AboutPage;