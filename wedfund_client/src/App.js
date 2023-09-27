import Navbar from "./Component/Navbar"
import Home from './Component/Home';
import About from "./Component/About";
import HowWorks from "./Component/HowWorks";
import Career from "./Component/Career";
import Footer from './Component/Footer'
import {
  Route,
  BrowserRouter as Router,
  Routes,
}from 'react-router-dom';
import GoToTop from "./Component/GoToTop";

function App() {

  return (
    <>

    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/how-it-works" element={<HowWorks />} />
      <Route path="/careers" element={<Career />} />
      </Routes>
      <Footer />
      <GoToTop />
      </Router>
    </>
  )
}

export default App