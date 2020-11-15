import { motion } from 'framer-motion'
import React from 'react'
import { ProjectsData } from './Data'
import './Styles/Projects.css'

const Projects = () => {
    return (
        <motion.div className='projects'>
            <motion.div className='components__container' >
                        {ProjectsData.map((user) => (
                                <motion.div 
                                variants={user.motion} 
                                initial="hidden"
                                animate="visible"
                                className="projects__container">
                                    <motion.img 
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    src={user.img} className="project__img" />
                                    <motion.h1 className='project__name'> {user.name} </motion.h1>
                                    <motion.a href={user.source} target='_blank'  className='sourcecode__btn' 
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >Source code </motion.a>
                                    <motion.a 
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    href={user.demo} target='_blank'  className='demo__btn' >Demo </motion.a>
                                </motion.div>  
                        ))}
            </motion.div>
        </motion.div>
        
    )
}

export default Projects
