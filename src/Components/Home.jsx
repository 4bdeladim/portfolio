import { motion } from 'framer-motion'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './Styles/Home.css'



const name = {
    hidden: {
        x: '-50vw',
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1, 
        type: "Tween",
        transition: {
            type: "Tween",
            delay: 0,
            ease: "anticipate",
            duration: 2,
        }
    }
}

const front = {
    hidden: {
        x: '-60vw',
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1, 
        transition: {

            delay: 0.5,
            ease: "anticipate",
            duration: 2,
        }
    }
}

const end = {
    hidden: {
        x: '-70vw',
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1, 
        transition: {
            delay: 1,
            ease: "anticipate",
            duration: 2,
        }
    }
}

const developer = {
    hidden: {
        x: '-80vw',
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1, 
        transition: {
            delay: 1.5,
            ease: "anticipate",
            duration: 2,
        }
    }
}

const btn = {
    hidden: {
        x: '80vw',
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1, 
        transition: {
            delay: 1,
            ease: "anticipate",
            duration: 2,
        }
    },
    hover: {
        scale: 1.1,
        background: 'unset',
        

        transition: {
            delay: 0,
            duration: 0.5,
            ease: "easeIn"
        }
    }
}

const Home = () => {
    return (
        <motion.div className='home-container'>
            <motion.about className='home__about'>
                <motion.h1 className='home__name' 
                    variants={name}
                    initial="hidden"
                    animate="visible"
                >ABDELADIM</motion.h1>
                <motion.h3
                    variants={front}
                    initial="hidden"
                    animate="visible"
                className='home__special'>Front </motion.h3>
                <motion.h3
                    variants={end}
                    initial="hidden"
                    animate="visible"
                className='home__special'>End </motion.h3>
                <motion.h3
                    variants={developer}
                    initial="hidden"
                    animate="visible"
                className='home__special'>Developer </motion.h3>
            </motion.about>
            <Link className='home__btn-container' to='/about'><motion.p 
                variants={btn}
                initial="hidden"
                animate="visible" 
                whileHover="hover"
            className='home__btn'><span className='home__text'>About Me </span> <FiArrowRight className='home__arrow' /> </motion.p></Link>
        </motion.div>
    )
}

export default Home
