import React, { useState, useEffect } from 'react';
import HeroOne from "../../assets/images/heroImages/hero1.PNG"
import HeroThree from "../../assets/images/heroImages/hero3.JPG"
import HeroFour from "../../assets/images/heroImages/hero4.jpg"
import HeroFive from "../../assets/images/heroImages/hero5.jpg"
import HeroSix from "../../assets/images/heroImages/hero6.jpg"
import HeroSeven from "../../assets/images/heroImages/hero7.JPG"
import HeroEight from "../../assets/images/heroImages/hero8.jpg"

const Hero = () => {
  const [index, setIndex] = useState(0);
  const images = [HeroOne, HeroThree, HeroFour, HeroFive, HeroSix, HeroSeven, HeroEight];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index === images.length - 1 ? 0 : index + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [index, images.length]);

  return (
    <div style={{ position: 'relative', paddingBottom: '35%', overflow: 'hidden' }}>
      <img
        src={images[index]}
        alt="Slide"
        style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, width: '100%', height: '100%', transform: 'scale(1)', transition: 'opacity 2s' }}
      />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', marginRight: "15%" }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <div>
            <h2 style={{ fontSize: "7rem", fontStyle: "italic", fontFamily: "regularFont", fontWeight: "lighter", margin: 0, lineHeight: "1.3rem", paddingBottom: "40px", color: '#fff' }}>Polished Events</h2>
            <p style={{ fontFamily: "regularFont", marginTop: "0", width: "100%", lineHeight: "1.6rem", fontSize: "2rem", letterSpacing: ".05em", color: "#fff", textAlign: 'center' }}>Experience the epitome of sophistication with Polished Events - elevating your events to the next level.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;