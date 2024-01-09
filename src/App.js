import "./style.css"
import React from 'react'
import Navbar from './component/Navbar';
import Footer from "./component/Footer";
// import Pertical from "./component/Pertical";
import Biodata from "./component/Biodata";
import About from "./component/About.jsx";
import Skil from './component/Skil';
import Project from './component/Project';
import CountUp from './component/Countup'
import FrequentlyAsked from "./component/FrequentlyAsked.jsx"
import { BrowserRouter } from 'react-router-dom'
// import Certification from "./component/Certification"

function App() { 
  return (
    <>
      <BrowserRouter>
        {/* <Pertical/> */}
        <Navbar />
        <Biodata />
        <About />
        <Project />
        <CountUp />
        {/* <Certification/> */}
        <Skil />
        <FrequentlyAsked />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
