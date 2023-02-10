import React from "react";
import PolishedAbout from "../../assets/images/PolishedAbout.jpeg"
import { Container } from "@mui/system";
import CssBaseline from '@mui/material/CssBaseline';

const AboutPage = () => {
  return (
    <React.Fragment>
    <CssBaseline />
    <Container id="AboutPage" maxWidth='xl'>
    
    <div  style={{ display: "flex", alignItems: "center", height: "92h", justifyContent: "center" }}>
      <div className="aboutPageSet" style={{ flex: .8, paddingBottom: "250px", paddingRight: "200px", height: "100%", }}>
      <div className="headerRow" style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", width: "100%", paddingTop: "60%" }}>
      <h2 className="cursiveH2 headerBigLetter" style={{ fontSize: "8rem", fontStyle: "italic", fontFamily: "cursiveFont", fontWeight: "lighter", margin: "0", lineHeight: "2.6rem", paddingBottom:"40px", marginRight:"5px", textAlign: "center" }}>A</h2>
      <h2 className="cursiveH2" style={{ fontSize: "6rem", fontFamily: "cursiveFont", fontStyle: "italic", fontWeight: "lighter", lineHeight: "2.6rem", textAlign: "center" }}>bout</h2>
    </div>
    <p style={{ fontSize: "1rem", fontFamily: "regularFont", marginTop: "0", width: "100%", lineHeight: "1.6rem", fontSize: "16px", paddingBottom:"10px", letterSpacing: ".05em", color:  "#706d6d", textAlign: "left" }}>
          Polished Events elevates events with their exceptional event design and planning services. With a focus on creating personalized and unforgettable experiences, we expertly attend to every detail and stay within budget. Let us help plan your next memorable occasion.
        </p>
        <p style={{ fontSize: "1rem", fontFamily: "regularFont", width: "100%", lineHeight: "1.6rem", fontSize: "16px", letterSpacing: ".05em", color:  "#706d6d", textAlign: "left" }}>
          We are dedicated to delivering exceptional event design and planning services for all of life's special moments. We guarantee that your event will be nothing short of extraordinary.
        </p>
        <button style={{ 
  fontSize: "1rem", 
  textAlign: "center", 
  fontFamily: "regularFont", 
  lineHeight: "1.6rem", 
  letterSpacing: ".05em",  
  paddingBottom: "5px",
  color: "#706d6d",
  display: "flex",
  justifyContent: "left",
  border: "1px solid black",
  paddingLeft: "9px",
  paddingRight: "5px",
  borderRadius: "5px",
  paddingTop: "2px",
  width: "17.5%"
}} >
  Read More  
</button>
    </div>
      <div className="my-cool-item" style={{ flex: 1, padding: "10px", height: "100%", textAlign: "center", paddingTop: "20%" }}>
        <img src={PolishedAbout} alt="Your Image" style={{ width: "100%", boxShadow: "80px -80px 0px 0 #C3A6A0" }} />
      </div>
    </div>
    </Container>
      </React.Fragment>
  );
};

export default AboutPage;