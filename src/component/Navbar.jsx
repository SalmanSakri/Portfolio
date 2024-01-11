import React, { useState } from 'react'

import { FaBars, FaTimes } from 'react-icons/fa';
import "../style/Navbar.css"
import { HashLink as Link } from 'react-router-hash-link';
// import { Link } from 'react-router-dom';
// import { MdOutlineDarkMode } from "react-icons/md";
// import { MdOutlineLightMode } from "react-icons/md";
const Navbar = () => {

  // light&dark mode start 
  // const [theme, setTheme] = useState("dark-theme");

  // const changeTheme = () => {
  //   if (theme === "light-theme") {
  //     setTheme("dark-theme")
  //   } else {
  //     setTheme("light-theme")
  //   }
  // }

  // useEffect(() => {
  //   document.body.className = theme;
  // }, [theme]);

  // light&dark mode end


  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  // const closeNavbar = () => {
  //   setIsNavOpen(false);
  // };
  return (
    <>
      <nav className='navbar'>
        <h1><span></span> Salman Sakri<span></span></h1>

        <div className="navlist">
          <ul className={`navbarUl  ${isNavOpen ? 'active' : ''}`}>
            {/* <Link to="#" smooth={true}> <li>Home</li></Link> */}
            <li>    <Link to="#about" smooth={true} duration={1000}>About </Link></li>
            <li> <Link to="#skil" smooth={true}> Skil</Link></li>
            <li> <Link to="#project" smooth={true}>Project</Link></li>
            <li> <Link to="#contact" duration={10000} smooth={true}> Contact</Link></li>
          </ul>
          <div className='nav-item'>
            {/* <li><MdOutlineDarkMode style={{fontSize:"30"}} onClick={()=>changeTheme()}/></li> */}
            {/* <li><MdOutlineLightMode style={{ fontSize: "30" }} osClick={() => changeTheme()} /></li> */}
            <ul>
              <li onClick={handleToggleNav} >
                {isNavOpen
                  ?
                  <span role="img" aria-label="Open Navigation">
                    < FaTimes style={{ fontSize: "24" }} />
                  </span>
                  :
                  <span role="img" aria-label="Close Navigation">
                    <FaBars style={{ fontSize: "24" }} />
                  </span>
                }
              </li>
            </ul>
          </div>
          <div>

          </div>
        </div>

      </nav>

    </>
  )
}

export default Navbar