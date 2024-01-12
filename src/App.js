import "./style.css"
import React ,{ lazy,Suspense} from 'react'
import Navbar from './component/Navbar';
 

import Biodata from "./component/Biodata";

import { BrowserRouter } from 'react-router-dom';

const Pertical= lazy(()=>import("./component/Pertical"));
const About= lazy(()=>import("./component/About.jsx"));
const FrequentlyAsked= lazy(()=>import("./component/FrequentlyAsked.jsx"));
const Project =lazy (()=> import ('./component/Project'));
const CountUp = lazy(()=> import ('./component/Countup'));
const Skil= lazy(()=>import('./component/Skil'));
const Footer= lazy(()=>import("./component/Footer"));
// const Biodata= lazy(()=>import("./component/Biodata"));

// import Pertical from "./component/Pertical";
// import Footer from "./component/Footer";
// import About from "./component/About.jsx";
// import FrequentlyAsked from "./component/FrequentlyAsked.jsx"
// import Project from './component/Project';
// import CountUp from './component/Countup';
// import Skil from './component/Skil';
// import Certification from "./component/Certification"

function App() {  
  return (
    <>
      <BrowserRouter>
      
        <Navbar />
        <Biodata />
     

        <Suspense fallback={<p>Loading...</p>}>
        <Pertical/>
      
        <About />
        <Project />
        <CountUp />
        <Skil />
        <FrequentlyAsked />
        <Footer />
        </Suspense>
       
        {/* <Certification/> */}
      
   
      </BrowserRouter>
    </>
  );
}

export default App;
