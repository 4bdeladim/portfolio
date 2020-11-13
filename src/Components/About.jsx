import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi';
import './Styles/About.css'
import { Link } from 'react-router-dom';


const h3 = {
  hidden: {
    y: '80vh'
},
visible: {
    y: 0,
    transition: {
        delay: 0,
        type: "tween" ,
        duration: 1.5,
    }
},
}

const AboutMe = {
  hidden: {
    y: '80vh'
},
visible: {
    y: 0,
    transition: {
        delay: 1,
        type: "tween" ,
        duration: 1.5,
    }
},
}


const Intrest = {
  hidden: {
    y: '100vh'
},
visible: {
    y: 0,
    transition: {
        delay: 1.5,
        type: "tween" ,
        duration: 1.5,
    }
},
}


const MyIntrest = {
  hidden: {
    y: '110vh'
},
visible: {
    y: 0,
    transition: {
        delay: 2,
        type: "tween" ,
        duration: 1.5,
    }
},
}

const MyBtn = {
  hidden: {
    y: '110vh'
},
visible: {
    y: 0,
    transition: {
        delay: 2,
        type: "tween" ,
        duration: 1.5,
    }
},
}

const MyImg = {
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

const Home = () => {



  return (
      <motion.div className='container'>
            <motion.div  className='about-container'>
              <motion.h3 
                variants={h3}
                initial="hidden"
                animate="visible"
              className='title' 
              >About Me : </motion.h3>
              <motion.p 
                variants={AboutMe}
                initial="hidden"
                animate="visible"
              className='about-me'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium animi deserunt consectetur esse minima tempore facere dolorem vitae totam. Iusto, adipisci fugit beatae sequi facilis totam distinctio deleniti nobis voluptatem.</motion.p>
              <motion.h3 
                variants={Intrest}
                initial="hidden"
                animate="visible"
              className='intrest'>Intrersts other than coding : </motion.h3>
              <motion.p 
                variants={MyIntrest}
                initial="hidden"
                animate="visible"
              className='my-intrest'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perspiciatis sed in aspernatur, corporis nobis nihil accusamus at saepe excepturi eos nostrum, veritatis minima quo eum laudantium! Saepe, culpa repellat. </motion.p>
              <Link to='/skills'>
                <motion.button 
                variants={MyBtn}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              className='btn-skills'>My Skills </motion.button>
              </Link>
              
            </motion.div>
            <motion.div 
            className='img-container'>
              <motion.img 
                variants={Intrest}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              className='img' src='/images/pexels-pixabay-220453.jpg' />
            </motion.div>
        </motion.div>
        
        

  );
    
}

export default Home