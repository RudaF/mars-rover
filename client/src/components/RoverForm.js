import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { commandRover } from "../api/api";

import TextInput from "./TextInput";
import RoverRow from "./RoverRow";

export default function RoverForm() {
  const { id } = useParams();
  const [command, setCommand] = useState("");
  const [settings, setSettings] = useState({ id: id, commands: command });

  const [position, setPosition] = useState({ x: 0, y: 0, direction: "N" });

  let errorMsg = "";
  if (command.length > 0 && command.match(/[^MRL]/gim)) {
    errorMsg = "Please insert a valid sequence of commands.";
  }

  useEffect(() => {
    setSettings({ id: id, commands: command });
  }, [command]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await commandRover(settings);
      const { currentPosition, currentDirection } = response.data;
      setPosition({
        x: currentPosition.x,
        y: currentPosition.y,
        direction: currentDirection,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-flex row">
      <div className="col container m-5 d-flex flex-column">
        <h1>Insert Chain of Commands</h1>
        <form onSubmit={handleSubmit}>
          <TextInput
            type="text"
            id="command"
            name="command"
            value={command}
            onChange={(event) => setCommand(event.target.value)}
            hint="Inset a valid set of commands, consisting only of: M, L and R."
            error={errorMsg}
          />

          <button className="mt-3=2 btn btn-danger" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="m-5 container col">
        <h1>Rover Map</h1>
        {[...Array(5)].map((x, i) => {
          return (
            <RoverRow
              col={position.y === 4 - i ? position.x : ""}
              direction={position.direction}
              boardSize={5}
            />
          );
        })}
      </div>
    </div>
  );
}
