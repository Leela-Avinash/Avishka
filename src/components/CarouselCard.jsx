import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import ClgImage from "../assets/IMG20241022194557.jpg";

function CarouselCard({ imagen }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });
  return (
    <animated.div
      className={Styles.card}
      style={{
            // props3,
            opacity: 100,
            backgroundImage: `url(${ClgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
        <div className="h-full w-full flex justify-center items-center bg-[#00000056]" >
            <h1 className="md:text-[2rem] text-2xl text-white">JNTU-GV</h1>
        </div>
    </animated.div>
  );
}

export default CarouselCard;
