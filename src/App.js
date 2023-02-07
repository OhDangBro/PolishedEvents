import logo from './logo.svg';
import './index.css';
import ThreeColumns from './components/columns';
import Hero from './components/hero'
import Navbar from './components/navbar';
import Footer from './components/footer';
import ServicesPage from './components/servicePage';
import AboutPage from './components/aboutPage'
import ContactPage from './components/contactPage';

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#f7f7f7" }}>
      <Navbar/>
   <ContactPage/>
    <Footer/>
  </div>
  );
}

export default App;
