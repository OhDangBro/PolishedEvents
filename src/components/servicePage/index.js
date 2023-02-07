import React from "react";
import PolishedThree from "../../assets/images/PolishedThree.jpg"
import { Container } from "@mui/system";
import CssBaseline from '@mui/material/CssBaseline';

const ServicesPage = () => {
  return (
    <React.Fragment>
    <CssBaseline />
    <Container fixed>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "120vh" }}>
      <div style={{ flex: 1, padding: "10px", marginLeft: "80px" }}>
        <div style={{ width: "80%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
            <h2 style={{ fontSize: "6rem", fontStyle: "italic", fontFamily: "regularFont", fontWeight: "lighter", margin: "0", lineHeight: "2.6rem", paddingBottom: "40px", marginRight: "5px" }}>S</h2>
            <h2 style={{ fontSize: "2rem", fontFamily: "regularFont", fontStyle: "italic", fontWeight: "lighter", lineHeight: "2.6rem" }}>ervices</h2>
          </div>
          <p style={{ fontSize: "1rem", fontFamily: "regularFont", marginTop: "0", width: "95%", lineHeight: "1.6rem", fontSize: "16px", letterSpacing: ".05em", color: "#706d6d" }}>
            We offer a wide range of event services, including but not limited to: </p>      
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", width: "120%" }}>
            <ul style={{ flex: 1, padding: "5px", marginLeft: "40%" }}>
            <li style={{ fontSize: ".7rem", fontFamily: "regularFont", marginTop: "0", width: "120%", lineHeight: "1.6rem", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>Baptisms</li>
              <li style={{ fontSize: ".7rem", fontFamily: "regularFont", marginTop: "0", width: "120%", lineHeight: "1.6rem", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>Birthdays</li>
              <li style={{ fontSize: ".7rem", fontFamily: "regularFont", marginTop: "0", width: "120%", lineHeight: "1.6rem", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>Weddings</li>
              <li style={{ fontSize: ".7rem", fontFamily: "regularFont", marginTop: "0", width: "120%", lineHeight: "1.6rem", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>Communions</li>
              <li style={{ fontSize: ".7rem", fontFamily: "regularFont", marginTop: "0", width: "120%", lineHeight: "1.6rem", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>Sweet Sixteen</li>
              <li style={{ fontSize: ".7rem", fontFamily: "regularFont", marginTop: "0", width: "120%", lineHeight: "1.6rem", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>Baby Showers</li>
              <li style={{ fontSize: ".7rem", fontFamily: "regularFont", marginTop: "0", width: "120%", lineHeight: "1.6rem", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>Bridal Showers</li>
              <li style={{ fontSize: ".7rem", fontFamily: "regularFont", marginTop: "0", width: "120%", lineHeight: "1.6rem", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>Corporate Event</li>
              <li style={{ fontSize: ".7rem", fontFamily: "regularFont", marginTop: "0", width: "120%", lineHeight: "1.6rem", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>Engagement Parties</li>

              <li style={{ fontSize: ".7rem", fontFamily: "regularFont", marginTop: "0", width: "120%", lineHeight: "1.6rem", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>Day of Coordinating</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="my-cool-item" style={{ flex: 1, padding: "10px" }}>
        <img src={PolishedThree} alt="Your Image" style={{ width: "90%", boxShadow: "80px -60px 0px 0 #C3A6A0" }} />
      </div>
    </div>
    </Container>
  </React.Fragment>
    
  );
};

export default ServicesPage;