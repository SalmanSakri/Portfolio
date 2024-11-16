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
                  <h4>Experience</h4><small>Fresher</small>
                </article>
                <article className="about-experience-list">
                  <span className='about-logo'><AiOutlineBook /></span>
                  <h4>Projects</h4><small>4+ Project</small>
                </article>
              </div>
            </motion.div>
            <p className='photoDataText'> I am Salman Sakri, a dedicated self-learner with a strong background in front-end development. As a React.js enthusiast, I thrive on pushing the boundaries of web design and functionality.
            </p>

            <p className='photoDataText'>My journey as a React.js developer is characterized by a relentless pursuit of knowledge and a knack for quickly adapting to emerging trends. As a quick learner, I am always eager to embrace new technologies.</p>
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