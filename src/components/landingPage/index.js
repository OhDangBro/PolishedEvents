import '../../index.css';
import ThreeColumns from '../../components/columns';
import Hero from '../../components/hero'


function LandingPage({handleClick}) {
  return (
    <div className="App" style={{ backgroundColor: "#f7f7f7" }}>
      <Hero/>
    <ThreeColumns handleClick={handleClick} />
  </div>
  );
}

export default LandingPage;
