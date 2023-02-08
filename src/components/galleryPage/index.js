import React, { useState, useEffect } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import galleryImageOne from "../../assets/images/heroImages/hero1.PNG"
import galleryImageTwo from "../../assets/images/heroImages/hero3.JPG"
import galleryImageThree from "../../assets/images/heroImages/hero4.jpg"
import galleryImageFour from "../../assets/images/heroImages/hero5.jpg"
import galleryImageFive from "../../assets/images/heroImages/hero6.jpg"
import galleryImageSix from "../../assets/images/heroImages/hero7.JPG"
import galleryImageSeven from "../../assets/images/heroImages/hero8.jpg"
import galleryImageEight from "../../assets/images/heroImages/try.JPG"
import galleryImageNine from "../../assets/images/heroImages/try2.JPG"
import galleryImageTen from "../../assets/images/heroImages/try3.JPG"


const images = [  galleryImageOne,  galleryImageTwo,  galleryImageThree,  galleryImageFour,  galleryImageFive, galleryImageSix, galleryImageSeven, galleryImageEight, galleryImageNine, galleryImageTen];

const Gallery = () => {
  const [data, setData] = useState({ img: '', i: 0 });

  const viewImage = (img, i) => {
    setData({ img, i });
  };

  const closeImage = () => {
    setData({ img: '', i: 0 });
  };

  const nextImage = () => {
    let nextIndex = data.i + 1;
    if (nextIndex === images.length) {
      nextIndex = 0;
    }
    setData({ img: images[nextIndex], i: nextIndex });
  };

  const prevImage = () => {
    let prevIndex = data.i - 1;
    if (prevIndex < 0) {
      prevIndex = images.length - 1;
    }
    setData({ img: images[prevIndex], i: prevIndex });
  };


  useEffect(() => {
    console.log('data.img changed');
  }, [data.img]);

  return (
    <>
      <div style={{ padding: '100px' }}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                style={{ width: '100%', display: 'block', cursor: 'pointer' }}
                alt=""
                onClick={() => viewImage(image, i)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      {data.img && (
       <div
       style={{
         width: '100%',
         height: '100vh',
         background: 'black',
         position: 'fixed',
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'center',
         bottom: 0,
         left: 0,
       }}
     >
  <img
    src={data.img}
    style={{ width: 'auto', maxWidth: '30%', maxHeight: '90%' }}
  />
<div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
<button
  style={{
    background: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    cursor: 'pointer',
    fontSize: "50px",
    marginTop: '10px',
    position: 'fixed',
    left: '10px',
  }}
  onClick={prevImage}
>
  &larr;
</button>
  <button
    style={{
      background: 'white',
      color: 'black',
      border: 'none',
      borderRadius: '5px',
      padding: '5px 10px',
      cursor: 'pointer',
      marginTop: '10px',
    }}
    onClick={closeImage}
  >
    Close
  </button>
  <button
    style={{
      background: 'black',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      padding: '5px 10px',
      fontSize: "50px",
      cursor: 'pointer',
      marginTop: '10px',
      position: 'fixed',
      right: '10px',
    }}
    onClick={nextImage}
  >
    &rarr;
  </button>
</div>
</div>




      )}
    </>
  );
};

export default Gallery;