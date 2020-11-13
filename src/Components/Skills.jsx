import React from 'react'
import {motion} from 'framer-motion'
import { FaArrowRight, FaBootstrap, FaCss3, FaGit, FaGithub, FaHtml5, FaJava, FaNpm, FaReact, FaTerminal, FaUbuntu } from 'react-icons/fa'
import './Styles/Skills.css'
import { Link } from 'react-router-dom'
import { SiGatsby, SiJavascript, SiNetlify } from 'react-icons/si'

const MyBtn = {
    hidden: {
      x: '-500vw'
  },
  visible: {
      x: 0,
      transition: {
          delay: 1,
          type: "tween" ,
          duration: 1.5,
      }
  },
  }

  const MyTitle = {
    hidden: {
      x: '-400vw'
  },
  visible: {
      x: 0,
      transition: {
          delay: 0,
          type: "tween" ,
          duration: 1.5,
      }
  },
  }
  const MySection = {
    hidden: {
      x: '-500vw'
  },
  visible: {
      x: 0,
      transition: {
          delay: 0.5,
          type: "tween" ,
          duration: 1.5,
      }
  },
  }

  const MyTools = {
    hidden: {
      x: '100vw',
      opacity: 0
  },
  visible: {
      x: 0,
      opacity: 1,
      transition: {
          delay: 0,
          duration: 1.5,
      }
  },
  }
  const MyTools2 = {
    hidden: {
      x: '100vw',
      opacity: 0
  },
  visible: {
      x: 0,
      opacity: 1,
      transition: {
          delay: .5,
          duration: 1.5,
      }
  },
  }





const Skills = () => {
    return (
        <motion.div className='skills__container'>
            <motion.div className='icons'>
                <motion.div 
                    variants={MyTools}
                    initial="hidden"
                    animate="visible"
                className='column1'>
                    <FaGithub className='ic__on' />
                    <FaNpm className='ic__on'  />
                    <FaBootstrap className='ic__on' />
                    <FaReact className='ic__on' />
                    <SiNetlify className='ic__on' />
                    <SiGatsby className='ic__on' />
                </motion.div>
                <motion.div variants={MyTools2}
                    initial="hidden"
                    animate="visible"
                    
                    className='column1'>
                    <FaHtml5 className='ic__on' />
                    <FaCss3 className='ic__on' />
                    <FaGit className='ic__on' />
                    <FaTerminal className='ic__on' />
                    <FaUbuntu className='ic__on' />
                    <SiJavascript className='ic__on' />
                </motion.div>
            </motion.div>
            <motion.div className='section__container'>
                <motion.h1  
                    variants={MyTitle}
                    initial= "hidden"
                    animate= "visible"
                className='skills__title'>
                    Tools that i use in my work :
                </motion.h1>
                <motion.p 
                    variants={MySection}
                    initial= "hidden"
                    animate= "visible"
                className='skills_section'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque culpa praesentium ullam. Omnis voluptate beatae ea minima amet, quod, nulla eos explicabo earum praesentium harum nisi pariatur quae, deleniti nemo?
                </motion.p>
                <motion.div 
                    variants={MyBtn}
                    initial= "hidden"
                    animate= "visible"
                    
                className='btns__container'  >
                    <Link to='/projects'>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        className='skills__btn'>
                            My Projects 
                        </motion.button> 
                    </Link>
                    
                <Link to='/projects' >
                    <FaArrowRight 
                    className='arrow__skills' />
                </Link>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Skills
