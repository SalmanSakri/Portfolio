
import React from 'react'
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import HeaderPhoto from "../img/salmansakriLogo.png";
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import "../style/Biodata.css"

// import Pertical from "../component/Pertical"

const Biodata = ({ isNavOpen  }) => {

  return (
    <>
      {/* <Pertical/> */} 
      <header className={`header ${isNavOpen ?'active' : ''}`}>
        <div className='header-Container'>
          <div className='headerphoto'>
            <img src={HeaderPhoto} alt="" />
          </div>
          <div className='header-text-container'>
            <div className="nameBio">
              <h3>Hi, My Name Is</h3>
            </div>
            <div className="nameBio2">
              <h1>Salman Sakri</h1>
            </div>
            <div className='Text-container'>
              <span className='Text frist-text'> I' m a  </span>
              <TypeAnimation
                sequence={[
                  ' Developer', // Types 'One'
                  1000, // Waits 1s
                  ' Self Learner', // Deletes 'One' and types 'Two'
                  2000, // Waits 2s
                  ' Web Developer',
                  2000, // Types 'Three' without deleting 'Two'
                  () => {
                    // console.log('Done typing!'); // Place optional callbacks anywhere in the array
                  }
                ]}
                wrapper="span"
                speed={35}
                cursor={true}
                className="Text second-text"
                repeat={Infinity}
              // style={{ fontSize: '2em' }}
              />
            </div>
          </div>
        </div>
        <div className='header-text-list-container'>
          <div>
            <p className='header-paregraph'>You are a click away from building your dream website or web app. Send me the details of your project for a modern, mobile responsive, highly performant website today!</p>
          </div>
           <motion.div className="right"
          initial={{ opacity: 0, scale: 0,  y:30 }}
          whileInView={{ opacity: 1, scale: 1, y:0}}
          transition={{ duration: 0.9 }}
  
        >
         <div className='header-button'>
            <Link href="" to="#contact"><button className='header-button1'>let's Talk</button></Link>
            <Link href=""  to="#project"><button className='header-button2'>My Work</button></Link>
          </div>
        </motion.div>
         
        </div>
      </header>
    
    </>

  )
}

export default Biodata