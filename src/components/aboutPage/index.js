import React from "react";
import PolishedAbout from "../../assets/images/PolishedAbout.jpeg"
import { Container } from "@mui/system";
import CssBaseline from '@mui/material/CssBaseline';

const AboutPage = ({handleClick}) => {
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
    Introducing Tiana - the creative mind behind Polished Events!
        </p>
        <p style={{ fontSize: "1rem", fontFamily: "regularFont", marginTop: "0", width: "100%", lineHeight: "1.6rem", fontSize: "16px", paddingBottom:"10px", letterSpacing: ".05em", color:  "#706d6d", textAlign: "left" }}>
        Tiana discovered her passion for event planning in 2018 while organizing her own wedding. Her innate ability to craft unique and personalized celebrations left her feeling inspired and ignited a spark within to turn her hobby into a thriving business.
        </p>
        <p style={{ fontSize: "1rem", fontFamily: "regularFont", marginTop: "0", width: "100%", lineHeight: "1.6rem", fontSize: "16px", paddingBottom:"10px", letterSpacing: ".05em", color:  "#706d6d", textAlign: "left" }}>
        Four years later, she continues to evolve and grow, driven by the thrill of bringing her clients' visions to life. For Tiana, there's no greater satisfaction than seeing the smile on her clients' faces when they see their dream event come to fruition.
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