import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Container } from "@mui/system";
import CssBaseline from '@mui/material/CssBaseline';
import PolishedContact from "../../assets/images/PolishedContactPage.jpg"

const ContactPage = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        number: '',
        eventdate: '',
        eventcity: '',
        guests: '',
        budget: '',
        eventtype: '',
        message: '',    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_09su88o', 'template_h1ju2pc', e.target, '2N7prBIjrBvk-XhUY')
            .then((result) => {
                console.log(result.text);
                setFormData({
                    firstname: '',
                    email: '',
                    number: '',
                    eventdate: '',
                    eventcity: '',
                    guests: '',
                    budget: '',
                    eventtype: '',
                    message: '',
                });
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container className="contactContainer" maxWidth='xxl'>
                <div id="ContactPage"  style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <br></br>
                    <div className="contactPageTopSection" style={{ width: "70%", padding: "50px" }}>
                        <div style={{ display: "flex" }}>
                            <div style={{ flex: 1, padding: "10px" }}>
                                <div className="headerRow" style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", paddingTop: "60%" }}>
                                    <h2 className="cursiveH2 headerBigLetter" style={{ fontSize: "8rem", fontStyle: "italic", fontFamily: "cursiveFont", fontWeight: "lighter", margin: "0", lineHeight: "2.6rem", paddingBottom: "40px", marginRight: "5px" }}>C</h2>
                                    <h2  className="cursiveH2" style={{ fontSize: "6rem", fontFamily: "cursiveFont", fontStyle: "italic", fontWeight: "lighter", lineHeight: "2.6rem" }}>ontact Us</h2>
                                </div>
                                <p style={{ fontSize: "1rem", fontFamily: "regularFont", marginTop: "0", width: "70%", lineHeight: "1.6rem", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>
                                    Let us take care of the planning so that you can focus on what matters most.
                                </p>
                            </div>
                            <div className="my-cool-item" style={{ flex: 1, padding: "10px" }}>
                                <img src={PolishedContact} alt="White roses event planning New Jersey" style={{ width: "80%", boxShadow: "80px -80px 0px 0 #C3A6A0" }} />
                            </div>
                        </div>
                    </div>
                    <br></br>
                 
                    <div className="contactPageBottomSection" style={{ width: "70%", padding: "50px" }}>
                        <div className="contactColumnReverse" style={{ display: "flex" }}>
                            <form className="contactForm" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", border: "1px solid #C3A6A0", padding: "10px", width: "45%", height: "80%", boxShadow: "-80px -60px 0px 0 #C3A6A0" }}>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: "10px" }}>
                                    <div style={{ display: "flex", flexDirection: "column", width: "48%" }}>
                                        <label style={{ fontSize: "0.8rem", marginBottom: "5px" }}>First Name:</label>
                                        <input
                                            type="text"
                                            name="firstname"
                                            value={formData.firstname}
                                            onChange={handleChange}
                                            style={{
                                                padding: "10px",
                                                fontSize: "1rem",
                                                fontFamily: "regularFont",
                                                textAlign: "center",
                                                width: "100%"
                                            }}
                                        />
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", width: "48%" }}>
                                        <label style={{ fontSize: "0.8rem", marginBottom: "5px" }}>Last Name:</label>
                                        <input
                                            type="text"
                                            name="lastname"
                                            value={formData.lastname}
                                            onChange={handleChange}
                                            style={{
                                                padding: "10px",
                                                fontSize: "1rem",
                                                fontFamily: "regularFont",
                                                textAlign: "center",
                                                width: "100%"
                                            }}
                                        />
                                    </div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                                    <label style={{ fontSize: "0.8rem", marginBottom: "5px" }}>Your Email:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        style={{
                                            padding: "10px 10px 10px 10px",
                                            fontSize: "1rem",
                                            fontFamily: "regularFont",
                                            textAlign: "center",
                                            width: "100%"
                                        }}
                                    />
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                                    <label style={{ fontSize: "0.8rem", marginBottom: "5px" }}>Your Phone Number:</label>
                                    <input
                                        type="tel"
                                        name="number"
                                        value={formData.number}
                                        onChange={handleChange}
                                        style={{
                                            padding: "10px 10px 10px 10px",
                                            fontSize: "1rem",
                                            fontFamily: "regularFont",
                                            textAlign: "center",
                                            width: "100%"
                                        }}
                                    />
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: "10px" }}>
                                    <div style={{ display: "flex", flexDirection: "column", width: "48%" }}>
                                        <label style={{ fontSize: "0.8rem", marginBottom: "5px" }}>Event Date:</label>
                                        <input
                                            type="date"
                                            name="eventdate"
                                            value={formData.eventdate}
                                            onChange={handleChange}
                                            style={{
                                                padding: "10px",
                                                fontSize: "1rem",
                                                fontFamily: "regularFont",
                                                textAlign: "center",
                                            }}
                                            className="eventDateInput"
                                        />
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", width: "48%" }}>
                                        <label style={{ fontSize: "0.8rem", marginBottom: "5px" }}>Event City:</label>
                                        <input
                                            type="text"
                                            name="eventcity"
                                            value={formData.eventcity}
                                            onChange={handleChange}
                                            style={{
                                                padding: "10px",
                                                fontSize: "1rem",
                                                fontFamily: "regularFont",
                                                textAlign: "center",
                                            }}
                                        />
                                    </div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: "10px" }}>
                                    <div style={{ display: "flex", flexDirection: "column", width: "48%" }}>
                                        <label style={{ fontSize: "0.8rem", marginBottom: "5px" }}>Guest Count:</label>
                                        <input
                                            type="number"
                                            name="guests"
                                            value={formData.guests}
                                            onChange={handleChange}
                                            style={{
                                                padding: "10px",
                                                fontSize: "1rem",
                                                fontFamily: "regularFont",
                                                textAlign: "center",
                                            }}
                                        />
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", width: "48%" }}>
                                        <label style={{ fontSize: "0.8rem", marginBottom: "5px" }}>Event Budget:</label>
                                        <input
                                            type="number"
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleChange}
                                            style={{
                                                padding: "10px",
                                                fontSize: "1rem",
                                                fontFamily: "regularFont",
                                                textAlign: "center",
                                            }}
                                            className="contactBudgetInput"
                                        />
                                    </div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: "10px" }}>
                                    <div style={{ display: "flex", flexDirection: "column", width: "48%" }}>
                                        <label style={{ fontSize: "0.8rem", marginBottom: "5px" }}>Event Type:</label>
                                        <input
                                            type="text"
                                            name="eventtype"
                                            value={formData.eventtype}
                                            onChange={handleChange}
                                            style={{
                                                padding: "10px",
                                                fontSize: "1rem",
                                                fontFamily: "regularFont",
                                                textAlign: "center",
                                            }}
                                        />
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", width: "48%" }}>
                                        <label style={{ fontSize: "0.8rem", marginBottom: "5px" }}>Message:</label>
                                        <input
                                            type="text"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            style={{
                                                padding: "10px",
                                                fontSize: "1rem",
                                                fontFamily: "regularFont",
                                                textAlign: "center",
                                            }}
                                        />
                                    </div>
                                </div>
                                
                                <button type="submit" style={{ padding: "10px",   fontSize: "1rem", 
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
  width: "17.5%" }}
  className="contactFormButton">
                                    Submit
                                </button>
                            </form>
                            <div style={{ flex: 1, padding: "10px", marginLeft: "80px" }}>
                                <div style={{ width: "80%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <div className="headerRow" style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                        <h2 className="cursiveH2 headerBigLetter" style={{ fontSize: "8rem", fontStyle: "italic", fontFamily: "cursiveFont", fontWeight: "lighter", margin: "0", lineHeight: "2.6rem", paddingBottom: "40px", marginRight: "5px" }}>G</h2>
                                        <h2 className="cursiveH2 headerBigLetter" style={{ fontSize: "6rem", fontFamily: "cursiveFont", fontStyle: "italic", fontWeight: "lighter", lineHeight: "2.6rem" }}>et in Touch</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
              
                </div>
            </Container>
        </React.Fragment>
    );
};

export default ContactPage;