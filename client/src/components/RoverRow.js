import React from "react";
import Arrow from "./Arrow";
export default function RoverMap(props) {
  return (
    <div className="row">
      {[...Array(props.boardSize)].map((x, i) => {
        return (
          <div
            className="col-6 d-flex justify-content-center"
            style={{ border: "1px solid red", width: "100px", height: "100px" }}
          >
            {props.col === i ? <Arrow direction={props.direction} /> : ""}
          </div>
        );
      })}
    </div>
  );
}
