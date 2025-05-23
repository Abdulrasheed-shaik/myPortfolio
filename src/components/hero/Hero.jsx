import React, { Suspense } from 'react'
import './hero.css'
import node from "../../assets/nodejsStackedLight.svg"
import react from "../../assets/react.svg"
import express from "../../assets/expressjs-icon.svg"
import mongodb from "../../assets/mongodb-svgrepo-com.svg"
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import Speech from './Speech'
import certificate from "../../assets/certificate.png"
import mypic from "../../assets/suitpic1.png"
import { motion } from "motion/react"
import Shape from './Shape'
import { Canvas } from '@react-three/fiber';

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.2,
    },
  },
};const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.2,
    },
  },
};
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hsection left">
        <motion.h1 
          initial={{y:-100, opacity:0}}
          animate={{y:0, opacity:1}}
          transition={{duration:2}}
          className='hTitle'>
          Hey There,
          <br />
          <span>I'm Abdul Rasheed</span>
        </motion.h1>
        <motion.div
        variants={awardVariants}
        initial='initial'
        animate='animate'
         className="awards">
          <motion.h2 variants={awardVariants}>
            MERN Full Stack Developer
          </motion.h2>
          <motion.p variants={awardVariants}>MERN stack developer eager to build scalable web apps.</motion.p>
          <motion.div variants={awardVariants} className="awardList">
          <motion.img variants={awardVariants} src={mongodb} alt="mongogb" />
          <motion.img variants={awardVariants} src={express} alt="express.js" />
          <motion.img variants={awardVariants} src={react} alt="react.js" />
          <motion.img variants={awardVariants} src={node} alt="node.js" />
          </motion.div>
        </motion.div>
        {/* scroll svg */}
        <motion.a
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          href="#services"
          className="scroll"
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </div>
      <div className="hsection right">
      <motion.div 
        variants={followVariants}
        initial="initial"
        animate="animate"
       className="follow">
      <motion.a href="https://github.com/Abdulrasheed-shaik" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} />
      </motion.a>
      <motion.a href="https://www.linkedin.com/in/sar12/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} />
      </motion.a>
      <div className="followTextContainer">
         <div className="followText">FOLLOW ME</div>
      </div>
      </motion.div>
      {/* speech bubble */}
      <Speech/>
      {/* spe */}
      <motion.div 
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 2 }}
      className='certificate'>
        <img src={certificate} alt="" />
        I'M A CERTIFIED
        <br />
        PROFESSIONAL
        <br />
        MERN Full Stack Developer
      </motion.div>
      {/* contact button */}
      <motion.a
          href="/#contact"
          className="contactLink"
          animate={{
            x: [200, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 2,
          }}
        >
          <motion.div
            className="contactButton"
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hire Now •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me •
                </textPath>
              </text>
            </svg>
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>
      <div className="bg">
        {/* 3d */}
        <Canvas>
          <Suspense fallback='loading...'>
          <Shape/>
          </Suspense>         
        </Canvas>
        <div className="hImg">
          <img src={mypic} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero