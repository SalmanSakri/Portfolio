import React from 'react'
import { motion } from "framer-motion"
import { DiJavascript } from 'react-icons/di';
import { FaReact,FaNodeJs,FaGitAlt,FaHtml5,FaCss3Alt } from 'react-icons/fa';
import { SiPostman,SiVercel,SiNetlify,SiGithub,SiSublimetext,SiMongodb} from 'react-icons/si';
import "../style/Skil.css"
const Skil = () => {
  return (
    <>
      <section className='skil' id='skil'>
        <h2 className="skilNumber numberCount">Skil I lernat</h2>
        <motion.div className="right"
          initial={{ opacity: 0, scale: 0, x: 0 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="skillHone slideInRight">
            <h3>Professional <strong>Skillset </strong></h3>
          </div>

          <div className='skilBox slideInRight'>
            <ul className='skilList'>
              <li className="skilitem"><FaHtml5 style={{ width: "100%" }} /><span>HTML</span></li>
              <li className="skilitem"><FaCss3Alt style={{ width: "100%" }} /><span>CSS</span></li>
              <li className="skilitem"><DiJavascript style={{ width: "100%" }} /><span>Javascript</span></li>
              <li className="skilitem"><FaReact style={{ width: "100%" }} /><span>React.js</span></li>
              <li className="skilitem"><SiMongodb style={{ width: "100%" }} /><span>Mongodb</span></li>
              <li className="skilitem"><FaNodeJs style={{ width: "100%" }} /><span>Nodejs</span></li>
              <li className="skilitem"><FaGitAlt style={{ width: "100%" }} /><span>Git</span></li>
            </ul>
          </div>
        </motion.div>

        <motion.div className="motin1"
          initial={{ opacity: 0, scale: 0, x:0 }}
          whileInView={{ opacity: 1, scale: 1, x:0 }}
          transition={{ duration: 0.6 }}
        >
        <div className="skillHone slideInLeft">
          <h3><strong>Tools </strong> I Use</h3>
        </div>
    
        <div className='skilBox slideInLeft'>
          <ul className='skilList'>
            {/* <li className="skilitem"><TbBrandVscode style={{width:"100%"}} /><span>HTML</span></li> */}
            <li className="skilitem"><SiPostman style={{ width: "100%" }} /><span>postman</span></li>
            <li className="skilitem"><SiVercel style={{ width: "100%" }} /><span>vercel</span></li>
            <li className="skilitem"><SiNetlify style={{ width: "100%" }} /><span>netlify</span></li>
            <li className="skilitem"><SiGithub style={{ width: "100%" }} /><span>github</span></li>
            <li className="skilitem"><SiSublimetext style={{ width: "100%" }} /><span>sublimetext</span></li>
          </ul>
        </div>
        </motion.div>
      </section>
    </>
  )
}

export default Skil