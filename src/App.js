import logo from './logo.svg';
import './index.css';
import React, { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import ServicesPage from './components/servicePage';
import AboutPage from './components/aboutPage'
import ContactPage from './components/contactPage';
import LandingPage from './components/landingPage';
import Gallery from './components/galleryPage';


function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const handlePageChange = (page) => setCurrentPage(page);
  const renderPage = () => {
   
    if (currentPage === "Home") {
      return <LandingPage currentPage={currentPage} handleClick={handlePageChange}/>;
    }
    if (currentPage === "About") {
      return <AboutPage handleClick={handlePageChange} />;
    }
    if (currentPage === "Services") {
      return <ServicesPage handleClick={handlePageChange} />;
    }
    if (currentPage === "Contact") {
      return <ContactPage />;
    }
    if (currentPage === "Gallery") {
      return <Gallery />;
    }
  };

  return (
    <div className="back">
<Navbar currentPage={currentPage} handleClick={handlePageChange}/>
      <main id="Main">{renderPage()}</main>
      <Footer></Footer>
    </div>
  );
}

export default App;
