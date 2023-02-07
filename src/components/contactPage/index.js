import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Contact from '../contact';
import { Container } from "@mui/system";
import CssBaseline from '@mui/material/CssBaseline';
import PolishedTwo from "../../assets/images/PolishedTwo.jpeg"

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
            <Container fixed>
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
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>



                    <div style={{ width: "70%", padding: "50px" }}>
                        <div style={{ display: "flex" }}>
                            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", border: "1px solid black", padding: "10px", width: "65%", height: "65%", boxShadow: "-60px -60px 0px 0 #C3A6A0" }}>


                                <div style={{ display: "flex", flexDirection: "row" }}>

                                    <input
                                        type="text"
                                        name="firstname"
                                        value={formData.firstname}
                                        onChange={handleChange}
                                        placeholder="First Name"
                                        style={{
                                            padding: "10px",
                                            marginRight: "10px",
                                            fontSize: "1rem",
                                            fontFamily: "regularFont",
                                            textAlign: "center"

                                        }}
                                    />
                                    <input
                                        type="text"
                                        name="lastname"
                                        value={formData.lastname}
                                        onChange={handleChange}
                                        placeholder="Last Name"
                                        style={{
                                            padding: "10px",
                                            marginRight: "10px",
                                            fontSize: "1rem",
                                            fontFamily: "regularFont",
                                            textAlign: "center"
                                        }}
                                    />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your email"
                                    style={{
                                        padding: "10px",
                                        marginRight: "10px",
                                        fontSize: "1rem",
                                        fontFamily: "regularFont",
                                        textAlign: "center"
                                    }}
                                />
                                <input
                                    type="tel"
                                    name="number"
                                    value={formData.number}
                                    onChange={handleChange}
                                    placeholder="Your phone number"
                                    style={{
                                        padding: "10px",
                                        marginRight: "10px",
                                        fontSize: "1rem",
                                        fontFamily: "regularFont",
                                        textAlign: "center"
                                    }}
                                />

                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <input
                                        type="date"
                                        name="eventdate"
                                        value={formData.eventdate}
                                        onChange={handleChange}
                                        placeholder="Event date"
                                        style={{
                                            padding: "10px",
                                            marginRight: "10px",
                                            fontSize: "1rem",
                                            fontFamily: "regularFont",
                                            textAlign: "center"
                                        }}
                                    />
                                    <input
                                        type="text"
                                        name="eventcity"
                                        value={formData.eventcity}
                                        onChange={handleChange}
                                        placeholder="Event city"
                                        style={{
                                            padding: "10px",
                                            marginRight: "10px",
                                            fontSize: "1rem",
                                            fontFamily: "regularFont",
                                            textAlign: "center"
                                        }}
                                    />
                                </div>
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <input
                                        type="number"
                                        name="guests"
                                        value={formData.guests}
                                        onChange={handleChange}
                                        placeholder="Number of guests"
                                        style={{
                                            padding: "10px",
                                            marginRight: "10px",
                                            fontSize: "1rem",
                                            fontFamily: "regularFont",
                                            textAlign: "center"
                                        }}
                                    />
                                    <input
                                        type="number"
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        placeholder="Event budget"
                                        style={{
                                            padding: "10px",
                                            marginRight: "10px",
                                            fontSize: "1rem",
                                            fontFamily: "regularFont",
                                            textAlign: "center"
                                        }}
                                    />
                                </div>
                                <button type="submit" style={{ padding: "10px" }}>
                                    Submit
                                </button>
                            </form>
                            <div style={{ flex: 1, padding: "10px", marginLeft: "80px" }}>
                                <div style={{ width: "80%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                        <h2 style={{ fontSize: "6rem", fontStyle: "italic", fontFamily: "regularFont", fontWeight: "lighter", margin: "0", lineHeight: "2.6rem", paddingBottom: "40px", marginRight: "5px" }}>G</h2>
                                        <h2 style={{ fontSize: "2rem", fontFamily: "regularFont", fontStyle: "italic", fontWeight: "lighter", lineHeight: "2.6rem" }}>et in Touch</h2>
                                    </div>
                                    <p style={{ fontSize: "1rem", fontFamily: "regularFont", marginTop: "0", width: "95%", lineHeight: "1.6rem", fontSize: "16px", letterSpacing: ".05em", color: "#706d6d" }}>
                                        We offer a wide range of event services, including but not limited to: </p>
                            
                                </div>
                            </div>
                        </div>
                    </div>



                    <div style={{ width: "70%", padding: "50px", height: "45vh" }}>

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

                        </div>
                    </div>

                </div>
            </Container>
        </React.Fragment>
    );
};

export default ContactPage;