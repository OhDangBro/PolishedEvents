import React, { useState, useEffect } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { Container } from "@mui/system";
import CssBaseline from '@mui/material/CssBaseline';
import galleryImageOne from "../../assets/images/GalleryImages/GalleryOne.JPG"
import galleryImageTwo from "../../assets/images/GalleryImages/GalleryTwo.JPG"
import galleryImageThree from "../../assets/images/GalleryImages/GalleryThree.jpg"
import galleryImageFour from "../../assets/images/GalleryImages/GalleryFour.JPG"
import galleryImageFive from "../../assets/images/GalleryImages/GalleryFive.JPG"
import galleryImageSix from "../../assets/images/GalleryImages/GallerySix.JPG"
import galleryImageSeven from "../../assets/images/GalleryImages/GallerySeven.jpeg"
import galleryImageEight from "../../assets/images/GalleryImages/GalleryEight.jpeg"
import galleryImageNine from "../../assets/images/GalleryImages/GalleryNine.jpg"
import galleryImageTen from "../../assets/images/GalleryImages/GalleryTen.jpg"
import galleryImageEleven from "../../assets/images/GalleryImages/GalleryEleven.JPG"
import galleryImageTwelve from "../../assets/images/GalleryImages/GalleryTwelve.jpg"
import galleryImageThirteen from "../../assets/images/GalleryImages/GalleryThirteen.jpeg"
import galleryImageFourteen from "../../assets/images/GalleryImages/GalleryFourteen.jpg"
import galleryImageFifteen from "../../assets/images/GalleryImages/GalleryFifteen.JPG"
import galleryImageSixteen from "../../assets/images/GalleryImages/GallerySixteen.jpg"


const images = [  galleryImageOne,  galleryImageTwo,  galleryImageThree,  galleryImageFour,  galleryImageFive, galleryImageSix, galleryImageSeven, galleryImageEight, galleryImageNine, galleryImageTen, galleryImageEleven, galleryImageTwelve, galleryImageThirteen, galleryImageFourteen, galleryImageFifteen, galleryImageSixteen];

const Gallery = ({handeClick}) => {
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
<React.Fragment>
<CssBaseline />
<Container maxWidth='xl'>
<div id="Gallery" style={{ padding: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
<div className="headerRow galleryPaddingHeader" style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", paddingTop: "15%" }}>
      <h2 className="cursiveH2 headerBigLetter" style={{ fontSize: "8rem", fontStyle: "italic", fontFamily: "cursiveFont", fontWeight: "lighter", margin: "0", lineHeight: "2.6rem", paddingBottom: "40px", marginRight: "5px" }}>G</h2>
      <h2 className="cursiveH2" style={{ fontSize: "6rem", fontFamily: "cursiveFont", fontStyle: "italic", fontWeight: "lighter", lineHeight: "2.6rem" }}>allery</h2>
    </div>
</div>
<div className="galleryPadding" style={{ padding: '100px' }}>
<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
<Masonry gutter="20px">
{images.map((image, i) => (
<img
key={i}
src={image}
style={{ width: '100%', display: 'block', cursor: 'pointer',   width: '100%',
objectFit: 'cover' }}
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
<img className="galleryClickThroughImages"
src={data.img}
style={{ width: 'auto', maxWidth: '30%', maxHeight: '90%' }}
/>

<div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
<button
className="prevButton"
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
  className="closeButton"
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
  className="nextButton"
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
      </Container>
      </React.Fragment>
  );
};

export default Gallery;