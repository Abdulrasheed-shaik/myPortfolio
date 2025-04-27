import React from 'react'
import { TypeAnimation } from "react-type-animation";
import man from '../../assets/botperson.jpg'
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 2 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "Certified MERN Stack Developer with expertise in building full-stack web applications.",
            1000,
            "Proficient in MERN Stack & Backend tools – React.js, Node.js, Express.js, MongoDB, MySQL, Git, and Postman.",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          // omitDeletionAnimation
          repeat={Infinity}
        />
      </div>
      <img src={man} alt="man" />
    </motion.div>
  );
};

export default Speech;