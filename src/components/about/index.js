import React from "react";
import PolishedOne from "../../assets/images/PolishedOne.jpeg"

const About = ({handleClick}) => {
  return (
<div style={{ display: "flex", alignItems: "center" }}>
  <div style={{ flex: .8, paddingBottom: "50px", paddingRight: "200px", height: "100%", }}>
  <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
  <h2 style={{ fontSize: "8rem", fontStyle: "italic", fontFamily: "cursiveFont", fontWeight: "lighter", margin: "0", lineHeight: "2.6rem", paddingBottom:"40px", marginRight:"5px" }}>A</h2>
  <h2 style={{ fontSize: "6rem", fontFamily: "cursiveFont", fontStyle: "italic", fontWeight: "lighter", lineHeight: "2.6rem" }}>bout</h2>
</div>
<p style={{ fontSize: "1rem", fontFamily: "regularFont", marginTop: "0", width: "120%", lineHeight: "1.6rem", paddingBottom:"0px", letterSpacing: ".05em", color:  "#706d6d" }}>
      Polished Events elevates events with their exceptional event design and planning services. With a focus on creating personalized and unforgettable experiences, we expertly attend to every detail and stay within budget. Let us help plan your next memorable occasion.
    </p>
    <p style={{ fontSize: "1rem", fontFamily: "regularFont", width: "120%", lineHeight: "1.6rem", letterSpacing: ".05em", color:  "#706d6d" }}>
      We are dedicated to delivering exceptional event design and planning services for all of life's special moments. We guarantee that your event will be nothing short of extraordinary.
    </p>
    <p style={{ fontSize: "1rem", fontFamily: "regularFont", width: "30%", lineHeight: "1.6rem", letterSpacing: ".05em",  paddingBottom: "10px", color: "#706d6d" }} >
Contact Us
</p>
</div>
  <div className="my-cool-item" style={{ flex: 1, padding: "10px", height: "100%" }}>
    <img src={PolishedOne} alt="Event Planning, Big Event" style={{ width: "140%", boxShadow: "80px -80px 0px 0 #C3A6A0" }} />
  </div>
</div>
  );
};

export default About;