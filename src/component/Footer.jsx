import React from 'react'
import Iframe from 'react-iframe'
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import "../style/Footer.css"

import { motion } from 'framer-motion';
// const motion=lazy(()=>import('framer-motion'))

const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer-card' id='contact'>
          <h2>Get In Touch  </h2>
          <p>Shoot me a message via any of the links below!</p>
          <motion.div className="right"
            initial={{ opacity: 0.8, scale: 0.6, y: 0 }}
            whileInView={{ opacity: 2, scale: 0.8, y: -80 }}
            transition={{ duration: 1.5 }}

          >


            <div className='footer-card-item'>

              <a href='https://wa.me/9920989486' target='_blank' rel='noopener noreferrer' aria-label="Whatsapp" >
                <FaWhatsapp />
              </a>
              <a href='mailto:salmansakri11@gmail.com' target='_blank' rel='noopener noreferrer' aria-label="Gmail" >
                <MdOutlineMailOutline />
              </a>
              <a href='https://www.instagram.com/itzz_sal_lu/' target='_blank' rel='noopener noreferrer' aria-label="Instagram" >
                <FaInstagram />
              </a>
            </div>
          </motion.div>
        </div>
        <hr />
        <div className='footerDesing'> Designed & Developed By<span> Salman Sakri </span>&#169; </div>
        <hr />
        <section>
          <div className='footer-video'>
            <Iframe src="https://giphy.com/embed/wvWGKeTUgz1rrrWq27"
            title="see you soon"
              width="140px"
              height="120px"
              id=""
              className="footer-video-item"
              display="block"
              position="relative" />
          </div>
        </section>
      </footer>


    </>
  )
}

export default Footer