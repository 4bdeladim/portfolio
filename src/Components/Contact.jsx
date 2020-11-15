import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import './Styles/Contact.css'
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const title = {
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
const para = {
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
            delay: 0.5,
            ease: "anticipate",
            duration: 2,
        }
    }
}

const icons = {
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
            delay: 1,
            ease: "anticipate",
            duration: 2,
        }
    }
}

const design = {
    hidden: {
        x: '50vw',
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1, 
        type: "Tween",
        transition: {
            type: "Tween",
            delay: 1.5,
            ease: "anticipate",
            duration: 2,
        }
    }
}

const Contact = () => {
    return (
        <motion.div className='contact__container'>
            <motion.div className='left__container'>
                <motion.h1 
                    variants={title}
                    initial= "hidden"
                    animate= "visible"
                className="contact__title">GET IN TOUCH</motion.h1>
                <motion.p 
                    variants={para}
                    initial="hidden"
                    animate="visible"
                className="contact__paragraphe">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat eius veniam porro? Magnam iusto, reprehenderit sint ullam fugit at autem sapiente animi laborum a nobis eligendi nostrum aperiam ipsam?</motion.p>
                <motion.div 
                    variants={icons}
                    initial="hidden"
                    animate="visible"
                className="contact__icons">
                    <a href="#" ><FaGithub className='contact__icon' /></a>
                    <a href="#" ><FaInstagram className='contact__icon' /></a>
                    <a href="#" ><FaTwitter className='contact__icon' /></a>
                    <a href="#" ><AiOutlineMail className='contact__icon' /></a>
                </motion.div>
            </motion.div>
            <Link to='/portfolio' className='btn__contact'>
                <motion.button 
                    variants={design}
                    initial= "hidden"
                    animate= "visible"
                className='gohome__btn' >BACK TO HOME </motion.button>
            </Link>
        </motion.div>
    )
}

export default Contact
