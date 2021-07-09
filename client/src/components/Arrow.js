import React from "react";

export default function Arrow(props) {
  const arrows = { n: "up", e: "right", s: "down", w: "left" };
  return (
    <i
      style={{ fontSize: "100px", color: "black" }}
      className={`fas fa-arrow-${arrows[props.direction.toLowerCase()]}`}
    ></i>
  );
}
