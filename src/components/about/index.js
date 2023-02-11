import React from "react";
import PolishedAbout from "../../assets/images/PolishedAbout.jpeg"
const About = ({handleClick}) => {
  return (
    
<div id="About"  style={{ display: "flex", alignItems: "center" }}>
  <div  style={{ flex: 1, paddingRight: "50px", height: "100%" }}>
    <div className="headerRow" style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
      <h2 className="cursiveH2 headerBigLetter" style={{ fontSize: "8rem", fontStyle: "italic", fontFamily: "cursiveFont", fontWeight: "lighter", margin: "0", lineHeight: "2.6rem", paddingBottom: "40px", marginRight: "5px" }}>A</h2>
      <h2 className="cursiveH2" style={{ fontSize: "6rem", fontFamily: "cursiveFont", fontStyle: "italic", fontWeight: "lighter", lineHeight: "2.6rem" }}>bout</h2>
    </div>
    <p style={{ fontSize: "1rem", fontFamily: "regularFont", marginTop: "0", width: "100%", lineHeight: "1.6rem", letterSpacing: ".05em", color: "#706d6d" }}>
      Polished Events elevates events with their exceptional event design and planning services. With a focus on creating personalized and unforgettable experiences, we expertly attend to every detail and stay within budget.
    </p>
    <p style={{ fontSize: "1rem", fontFamily: "regularFont", width: "100%", lineHeight: "1.6rem", letterSpacing: ".05em", color: "#706d6d" }}>
      We are dedicated to delivering exceptional event design and planning services for all of life's special moments. We guarantee that your event will be nothing short of extraordinary. Let us take care of the planning so that you can focus on what matters most.
    </p>
    <button 
    className="aboutButton"
    style={{ 
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
  paddingLeft: "5px",
  paddingRight: "5px",
  borderRadius: "5px",
  width: "13.5%"
}} 
onClick={() => { handleClick('About'); }}
>
  Read More  
</button>
  </div>
  <div style={{ flex: 1, padding: "10px", height: "100%" }}>
    <img src={PolishedAbout} alt="Event Planning, Big Event" style={{ width: "100%", boxShadow: "80px -80px 0px 0 #C3A6A0" }} />
  </div>
</div>
  );
};

export default About;