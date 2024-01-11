import React from 'react'
import Img from "../img/salman.jpg"
import { motion } from 'framer-motion';
import { GrCertificate } from "react-icons/gr";
import { AiOutlineBook } from "react-icons/ai";
import "../style/About.css"
// import Biodata from './Biodata';
// import Project from './Project';
// import CountUp from './Countup';
// import Skil from './Skil';
// import FrequentlyAsked from "./FrequentlyAsked.jsx"
// import Footer from "./Footer";

const About = () => {
  return (
    <>
      <hr />
      <section className='PhotoData about' id='about'>
        <h1 className='aboutMe numberCount'>About Me</h1>
        <div className="PhotoDataContainer">
          <div className="photoDataInf">
            <motion.div className="right"
              initial={{ opacity: 0.2, scale: 0, y: 0 }} 
              whileInView={{ opacity: 1, scale: 1, x: -0 }}
              transition={{ duration: 0.6 }}


            >
              <div className='about-experience'>
                <article className="about-experience-list">
                  <span className='about-logo'><GrCertificate /></span>
                  <h4>Experience</h4><small>Freasher</small>
                </article>
                <article className="about-experience-list">
                  <span className='about-logo'><AiOutlineBook /></span>
                  <h4>Projects</h4><small>1+ Project</small>
                </article>
              </div>
            </motion.div>
            <p className='photoDataText'> React.Js developer with a strong background in front-end development. A quick learner who is perpetually
 passionate about embracing new technologies and expanding skill sets.
            </p>

            <p className='photoDataText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sapiente obcaecati molestias eveniet, cumque quidem ad architecto distinctio optio fuga, sint a beatae enim corporis quae facere? Incidunt quae rerum modi consequatur amet dolorem. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>

          <div className='About-photo'>
            <div className='photoDataImg'>
              <div className="photoDataContainer">
                <img className='photoImg' src={Img} alt="Salman Sakri" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Biodata /> */}
      {/* <Project />
      <CountUp />
      <Skil />
      <FrequentlyAsked />
      <Footer /> */}
    </>
  )
}

export default About