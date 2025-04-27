import React, { useRef, useState } from 'react'
import "./services.css"

import { motion, useInView } from "motion/react";
import webDevelper from "../../assets/web-developer.png"
import frontend from "../../assets/frontend.png"
import backend from "../../assets/backend.png"
import Counter from './Counter';
import ComputerModelContainer from './computer/ComputerModelContainer';
import ProgrammerContainer from './programmer/ProgrammerContainer';
import DesktopContainer from './desktop/DesktopContainer';


const textVariants = {
  initial: { x: -100, y: -100, opacity: 0 },
  animate: {
    x: 0, y: 0, opacity: 1,
    transition: { duration: 1 },
  },
};

const listVariants = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0, opacity: 1,
    transition: { duration: 1, staggerChildren: 0.5 },
  },
};

const services = [
  {
    id: 1,
    img: webDevelper,
    title: "Full-Stack Development",
    counter: 1,
  },
  {
    id: 2,
    img: frontend,
    title: "Frontend Development",
    counter: 3,
  },
  {
    id: 3,
    img: backend,
    title: "Backend Development",
    counter: 2,
  },
];

const Services = () => {
  const [currentServiceId, setCurrentServiceId] = useState(1);
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div className="services" ref={ref}>
      <div className="sSection left">
        <motion.h1
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="sTitle"
        >
          How do I help?
        </motion.h1>

        <motion.div
          variants={listVariants}
          animate={isInView ? "animate" : "initial"}
          className="serviceList"
        >
          {services.map((service) => (
            <motion.div
              variants={listVariants}
              className={`service ${currentServiceId === service.id ? "active" : ""}`}
              key={service.id}
              onClick={() => setCurrentServiceId(service.id)}
            >
              <div className="serviceIcon">
                <img src={service.img} alt={service.title} />
              </div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
                <h3>{service.counter} Projects</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="counterList">
          <Counter from={0} to={5} text="Projects Completed" />
          <Counter from={0} to={3} text="Happy Clients" />
        </div>
      </div>

      <div className="sSection right">
      {currentServiceId === 1 ? (
          <ComputerModelContainer />
        ) : currentServiceId === 2 ? (
          <ProgrammerContainer />
        ) : (
          <DesktopContainer />
        )}
        
        
      </div>
    </div>
  );
};

export default Services;
