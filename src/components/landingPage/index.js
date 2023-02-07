import '../../index.css';
import ThreeColumns from '../../components/columns';
import Hero from '../../components/hero'
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

function LandingPage() {
  return (
    <div className="App" style={{ backgroundColor: "#f7f7f7" }}>
      <Navbar/>
      <Hero/>
    <ThreeColumns />
  </div>
  );
}

export default LandingPage;
