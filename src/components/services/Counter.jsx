import { useInView, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";

const Counter = ({ from, to, text }) => {
  const [count, setCount] = useState(from);
  const ref = useRef();
  const isInView = useInView(ref, { once: true }); // Ensure animation happens only once

  useEffect(() => {
    if (!isInView) return;

    const animation = animate(from, to, {
      duration: 4,
      ease: "easeOut",
      onUpdate: (latest) => {
        setCount(Math.floor(latest)); // Update counter on every animation step
      },
    });

    return () => animation.cancel(); // Cleanup the animation on component unmount or view change
  }, [isInView, from, to]); // Only trigger animation when in view

  return (
    <div className="counter" ref={ref}>
      <h1>{count}+</h1>
      <p>{text}</p>
    </div>
  );
};

export default Counter;
