import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion"; // Important to add useInView!
import "./portfolio.css"; 
import clickzap from "../../assets/clickzap.png"; 

const items = [
  { id: 1, img: clickzap, title: "Full Stack Blog Application", desc: "Project description here.", link: "/" },
  { id: 2, img: clickzap, title: "School Management System", desc: "Project description here.", link: "/" },
  { id: 3, img: clickzap, title: "Real-time Chat Application", desc: "Project description here.", link: "/" },
  { id: 4, img: clickzap, title: "Social Media Project", desc: "Project description here.", link: "/" },
  { id: 5, img: clickzap, title: "Animated Portfolio Website", desc: "Project description here.", link: "/" },
];

// Variants for list and card animation
const listVariant = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const cardVariant = {
  initial: {
    scale: 0.8,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const ListItem = ({ item }) => {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const cardRect = cardRef.current.getBoundingClientRect();
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const cardCenterY = cardRect.top + cardRect.height / 2;

    const deltaX = (e.clientX - cardCenterX) / (cardRect.width / 2);
    const deltaY = (e.clientY - cardCenterY) / (cardRect.height / 2);

    setRotation({
      x: deltaY * 15,
      y: -deltaX * 15,
    });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  return (
    <motion.div
      ref={cardRef}
      className="pCard"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      variants={cardVariant}
      style={{
        transform: `perspective(1200px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovering ? 1.05 : 1})`,
        transition: "transform 0.2s ease-out, box-shadow 0.2s ease-out",
        boxShadow: isHovering
          ? `${-rotation.y * 2}px ${rotation.x * 2}px 20px rgba(0, 0, 0, 0.3)`
          : "0px 0px 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="pCardImg">
        <img src={item.img} alt={item.title} />
      </div>
      <div className="pCardText">
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <a href={item.link}>
          <button>View Project</button>
        </a>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div className="portfolio-wrapper" ref={ref}>
      <motion.div
        className="portfolio"
        variants={listVariant}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;
