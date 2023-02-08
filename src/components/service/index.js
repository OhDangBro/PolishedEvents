import React from "react";
import PolishedThree from "../../assets/images/30birthday.JPG"

const Services = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="my-cool-item" style={{ flex: 1, padding: "10px" }}>
        <img src={PolishedThree} alt="Your Image" style={{ width: "75%", boxShadow: "-80px -80px 0px 0 #C3A6A0" }} />
      </div>
      <div style={{ flex: 1, padding: "10px", marginLeft: "80px", paddingBottom: "6%" }}>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", paddingRight: "20%" }}>
            <h2 style={{ fontSize: "8rem", fontStyle: "italic", fontFamily: "cursiveFont", fontWeight: "lighter", margin: "0", lineHeight: "2.6rem", paddingBottom: "40px", marginRight: "5px" }}>S</h2>
            <h2 style={{ fontSize: "6rem", fontFamily: "cursiveFont", fontStyle: "italic", fontWeight: "lighter", lineHeight: "2.6rem" }}>ervices</h2>
          </div>
          <p style={{ fontSize: "1.5rem", fontFamily: "regularFont", marginTop: "-30px", width: "100%", lineHeight: "1.6rem", fontSize: "16px", letterSpacing: ".05em", color: "#706d6d" }}>
            We offer a wide range of event services, including but not limited to: </p>      
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", width: "100%", paddingRight: "11%"  }}>
            <ul style={{ flex: 1, padding: "px",  }}>
            <li style={{ fontSize: ".7rem", fontFamily: "regularFont", marginTop: "0", width: "120%", lineHeight: "1.6rem", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>Baby Showers</li>
              <li style={{ fontSize: ".7rem", fontFamily: "regularFont", marginTop: "0", width: "120%", lineHeight: "1.6rem", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>Baptisms</li>
              <li style={{ fontSize: ".7rem", fontFamily: "regularFont", marginTop: "0", width: "120%", lineHeight: "1.6rem", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>Birthdays</li>
              <li style={{ fontSize: ".7rem", fontFamily: "regularFont", marginTop: "0", width: "120%", lineHeight: "1.6rem", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>Bridal Showers</li>  
            </ul>
            <ul style={{ flex: 1, padding: "5px", marginRight: "3%" }}>
            <li style={{ fontSize: ".7rem", fontFamily: "regularFont", marginTop: "0", width: "120%", lineHeight: "1.6rem", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>Communions</li>
            <li style={{ fontSize: ".7rem", fontFamily: "regularFont", marginTop: "0", width: "120%", lineHeight: "1.6rem", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>Corporate Events</li>
            <li style={{ fontSize: ".7rem", fontFamily: "regularFont", marginTop: "0", width: "120%", lineHeight: "1.6rem", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>Day of Coordinating</li>
            <li style={{ fontSize: ".7rem", fontFamily: "regularFont", marginTop: "0", width: "120%", lineHeight: "1.6rem", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>Engagement Parties</li>

            </ul>
            <ul style={{ flex: 1, padding: "5px" }}>
            <li style={{ fontSize: ".7rem", fontFamily: "regularFont", marginTop: "0", width: "120%", lineHeight: "1.6rem", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>Fundraisers</li>
            <li style={{ fontSize: ".7rem", fontFamily: "regularFont", marginTop: "0", width: "120%", lineHeight: "1.6rem", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>Graduation</li>
              <li style={{ fontSize: ".7rem", fontFamily: "regularFont", marginTop: "0", width: "120%", lineHeight: "1.6rem", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>Sweet Sixteen</li>
              <li style={{ fontSize: ".7rem", fontFamily: "regularFont", marginTop: "0", width: "120%", lineHeight: "1.6rem", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>Wedding</li>
            </ul>
          </div>
        </div>
        <p style={{ 
  fontSize: "1rem", 
  textAlign: "center", 
  fontFamily: "regularFont", 
  lineHeight: "1.6rem", 
  letterSpacing: ".05em",  
  paddingBottom: "10px", 
  color: "#706d6d",
  display: "flex",
  justifyContent: "center",
  paddingLeft: "32%"
}} >
  View More   <hr className="verticalLine" style={{
    width: "6%",
    height: "2px",
    border: "1px solid #c3a6a0",
    marginLeft: "1px",
    marginTop: "3%"
  }}
  />
</p>
      </div>
    </div>
  );
};

export default Services;