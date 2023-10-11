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
import LoadingBar from 'react-top-loading-bar'
import { useState } from "react";


function App() {

  const [progress, setProgress] = useState(100)

  return (
    <>

    <Router>
      <Navbar />
      <LoadingBar
        color='#6c0505'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
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