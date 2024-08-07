import './App.css';
import Hero from './components/Hero';
import Whatwedo from "./components/Whatwedo"
import Choose from "./components/Choose"
import Footer from './components/Footer'
import Services from './components/Services';
import ControlledAccordions from './components/Questions';
function App() {
  return (
    <>
      <Hero />
      <Whatwedo />
      <Choose />
      <ControlledAccordions/>
      <Services/>
      <Footer/>
    </>
  );
}

export default App;
