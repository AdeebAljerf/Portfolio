import React, { useEffect, useState } from "react";
import styles from "./mouseEffect.module.css";

const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e",
];

const CircleAnimation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const updateTrail = () => {
      setTrail((prevTrail) => {
        const newTrail = [mousePosition, ...prevTrail.slice(0, 50)];
        return newTrail;
      });
    };

    const intervalId = setInterval(updateTrail, 5);

    return () => clearInterval(intervalId);
  }, [mousePosition]);

  return (
    <>
      {trail.map((position, index) => (
        <div
          key={index}
          className={styles.circle}
          style={{
            left: `${position.x - 6}px`,
            top: `${position.y - 6}px`,
            backgroundColor: colors[index % colors.length],
            transform: `scale(${
              ((colors.length - index) / colors.length) * 0.9
            }) rotate(${index * 5}deg)`,
            opacity: 1 - index / colors.length,
          }}
        />
      ))}
    </>
  );
};

export default CircleAnimation;
