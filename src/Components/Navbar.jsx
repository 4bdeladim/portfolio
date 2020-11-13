import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Styles/Navbar.css';
import { motion } from 'framer-motion'




const header  = {
    hidden: {
        y: '-10vh'
    },
    visible: {
        y: 0,
        transition: {
            delay: 1,
            type: "spring" ,
            stiffness: 300,
            duration: 2,
        }
    },
    
}

const links = {

    hover : {
        textShadow: "0px 0px 8px rgb(39, 39, 170)",
        transition: {
            ease: "easeIn",
            duration: 0.5, 
            delay: 0
        }
    }
}





function Navbar() {
  const [click, setClick] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <motion.nav
        variants={header}
        initial="hidden"
        animate="visible"
      className='navbar'>
        <div 
        
        className='navbar-container'>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <FaTimes className='icon' /> : <FaBars className='icon' />}
          </div>
          <ul 
            
          className={click ? 'nav-menu active' : 'nav-menu'}>
            <li 
            variants={links}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className='nav-item'>
              <Link to='/portfolio' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li  
            variants={links}
            initial="hidden"
            animate="visible"
            whileHover="hover"
             className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Me
              </Link>
            </li>
            <li  
            variants={links}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className='nav-item'>
              <Link
                to='/skills'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                My Skills
              </Link>
            </li>
            <li  
            variants={links}
            initial="hidden"
            animate="visible"
            whileHover="hover"
             className='nav-item'>
              <Link
                to='/projects'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li  
            variants={links}
            initial="hidden"
            animate="visible"
            whileHover="hover"
             className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </motion.nav>
    </>
  );
}

export default Navbar;