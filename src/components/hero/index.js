import React, { useState, useEffect } from 'react';

import HeroThree from "../../assets/images/heroImages/flowerimg.webp"

const Hero = () => {
  const [index, setIndex] = useState(0);
  const images = [ HeroThree,];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index === images.length - 1 ? 0 : index + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, [index, images.length]);

  return (
    <div style={{ position: 'relative', paddingBottom: '35%', overflow: 'hidden' }}>
      <img
        src={images[index]}
        alt="Slide"
        style={{ position: 'absolute', top: "100px", bottom: 0, left: 0, right: 0, width: '100%', height: '100%', transform: 'scale(1)', transition: 'opacity 1s', 
      }}
      />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', marginRight: "10%" }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <div style={{paddingBottom: "250px"}}>
            <h2 style={{ marginBottom: "25%", fontSize: "10rem", fontStyle: "italic", fontFamily: "cursiveFont", fontWeight: "lighter", margin: 0, lineHeight: "1.3rem", paddingBottom: "40px", color: 'white'  }}>Polished Events</h2>
            <p style={{  fontFamily: "regularFont", marginTop: "10", width: "90%", lineHeight: "1.6rem", fontSize: "1.3rem", letterSpacing: ".05em", color: "#fff", textAlign: 'center' }}>Experience the epitome of sophistication with Polished Events - elevating your events to the next level.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;