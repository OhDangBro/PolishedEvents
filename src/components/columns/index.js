import React from "react";
import About from "../about";
import Services from "../service";
import Contact from "../contact";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const ThreeColumns = () => {
    return (
      <React.Fragment>
      <CssBaseline />
      <Container className="containerMUI" maxWidth='xxl' >
       <br></br>
   
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <br></br>
          <div className="columnSection" style={{ width: "70%", padding: "50px" }}><About/></div>
        
          <div className="columnSection" style={{ width: "70%", padding: "50px" }}><Services/></div>
          <br></br>
          <div className="columnSection" style={{ width: "70%", padding: "50px" }}><Contact/></div>
        </div>
        
      </Container>
    </React.Fragment>
      
      );
    };
    

export default ThreeColumns;