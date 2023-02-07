import React from "react";
import PolishedTwo from "../../assets/images/PolishedTwo.jpeg"
const Contact = () => {
  return (
 <div style={{ display: "flex" }}>
  <div style={{ flex: 1, padding: "10px" }}>
    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", paddingTop: "60%" }}>
      <h2 style={{ fontSize: "6rem", fontStyle: "italic", fontFamily: "regularFont", fontWeight: "lighter", margin: "0", lineHeight: "2.6rem", paddingBottom: "40px", marginRight: "5px" }}>c</h2>
      <h2 style={{ fontSize: "2rem", fontFamily: "regularFont", fontStyle: "italic", fontWeight: "lighter", lineHeight: "2.6rem" }}>ontact us</h2>
    </div>
    <p style={{ fontSize: "1rem", fontFamily: "regularFont", marginTop: "0", width: "70%", lineHeight: "1.6rem", fontSize: "16px", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>
      get in touch with us now to kick-start the planning process for your unforgettable event.
    </p>
  </div>
  <div className="my-cool-item" style={{ flex: 1, padding: "10px" }}>
    <img src={PolishedTwo} alt="Your Image" style={{ width: "100%", boxShadow: "80px -80px 0px 0 #C3A6A0" }} />
  </div>
</div>
    
  );
};

export default Contact;