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
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
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
                });
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth='xxl'>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <br></br>
                    <div style={{ width: "70%", padding: "50px" }}>
                        <div style={{ display: "flex" }}>
                            <div style={{ flex: 1, padding: "10px" }}>
                                <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", paddingTop: "60%" }}>
                                    <h2 style={{ fontSize: "8rem", fontStyle: "italic", fontFamily: "cursiveFont", fontWeight: "lighter", margin: "0", lineHeight: "2.6rem", paddingBottom: "40px", marginRight: "5px" }}>C</h2>
                                    <h2 style={{ fontSize: "6rem", fontFamily: "cursiveFont", fontStyle: "italic", fontWeight: "lighter", lineHeight: "2.6rem" }}>ontact Us</h2>
                                </div>
                                <p style={{ fontSize: "1rem", fontFamily: "regularFont", marginTop: "0", width: "70%", lineHeight: "1.6rem", fontSize: "16px", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>
                                    Let us take care of the planning so that you can focus on what matters most.
                                </p>
                            </div>
                            <div className="my-cool-item" style={{ flex: 1, padding: "10px" }}>
                                <img src={PolishedContact} alt="Your Image" style={{ width: "80%", boxShadow: "80px -80px 0px 0 #C3A6A0" }} />
                            </div>
                        </div>
                    </div>
                    <br></br>
                 
                    <div style={{ width: "70%", padding: "50px" }}>
                        <div style={{ display: "flex" }}>
                            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", border: "1px solid #C3A6A0", padding: "10px", width: "45%", height: "80%", boxShadow: "-80px -60px 0px 0 #C3A6A0" }}>
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
                                        <label style={{ fontSize: "0.8rem", marginBottom: "5px" }}>Event Date</label>
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
                                        <label style={{ fontSize: "0.8rem", marginBottom: "5px" }}>Number Of Guests:</label>
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
                                        />
                                    </div>
                                </div>
                                <button type="submit" style={{ padding: "10px" }}>
                                    Submit
                                </button>
                            </form>
                            <div style={{ flex: 1, padding: "10px", marginLeft: "80px" }}>
                                <div style={{ width: "80%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                        <h2 style={{ fontSize: "8rem", fontStyle: "italic", fontFamily: "cursiveFont", fontWeight: "lighter", margin: "0", lineHeight: "2.6rem", paddingBottom: "40px", marginRight: "5px" }}>G</h2>
                                        <h2 style={{ fontSize: "6rem", fontFamily: "cursiveFont", fontStyle: "italic", fontWeight: "lighter", lineHeight: "2.6rem" }}>et in Touch</h2>
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