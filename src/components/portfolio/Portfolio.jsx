import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion"; 
import "./portfolio.css"; 
import clickzap from "../../assets/clickzap.png"; 
import nutrifruit from "../../assets/nutrifruit.png";
import portfolio from "../../assets/portfolio.png"; 

const items = [
  { id: 1, img: clickzap, title: "ClickZap", desc: "ClickZap is a social media platform with real-time chat, media uploads, interactive engagement, notifications, and secure authentication.", link: "https://clickzap-1.onrender.com/login" },
  { id: 2, img: nutrifruit, title: "NutriFruit", desc: "NutriFruit is an e-commerce platform for fruits and related products, featuring Google signup, Razorpay payments, product search, cart management, and QR code access.", link: "https://abdulrasheed-shaik.github.io/NUTRIFRUIT/index.html" },
  { id: 5, img: portfolio, title: "Animated Portfolio Website", desc: "A React app featuring dynamic animations with Framer Motion, immersive 3D elements using Three.js, and EmailJS integration for seamless email notifications.", link: "https://my-portfolio-six-mu-65.vercel.app/" },
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
