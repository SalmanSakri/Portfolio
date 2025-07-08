import "./style.css"
import React, { lazy, Suspense, useEffect, useState } from 'react'
import Navbar from './component/Navbar';


import Biodata from "./component/Biodata";

import { BrowserRouter } from 'react-router-dom';
import Loading from "./component/Loading.jsx";

const Pertical = lazy(() => import("./component/Pertical"));
const About = lazy(() => import("./component/About.jsx"));
const FrequentlyAsked = lazy(() => import("./component/FrequentlyAsked.jsx"));
const Project = lazy(() => import('./component/Project'));
const CountUp = lazy(() => import('./component/Countup'));
const Skil = lazy(() => import('./component/Skil'));
const Footer = lazy(() => import("./component/Footer"));


function App() {
  const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  })
  return (
    <>
      {isloading ?
        (<Loading />)
        :
        (
          <BrowserRouter>
            <Navbar />
            <Biodata />

            <Suspense fallback={<p>Loading...</p>}>
              <Pertical />
              <About />
              <Project />
              <CountUp />
              <Skil />
              <FrequentlyAsked />
              <Footer />
            </Suspense>

            {/* <Certification/> */}

          </BrowserRouter>
        )}
    </>
  );
}

export default App;
