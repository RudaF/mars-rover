import React from "react";
import { useHistory } from "react-router-dom";

import { createRover } from "../api/api";

export default function Home() {
  const history = useHistory();

  const handleCreateRover = async () => {
    const response = await createRover();
    history.push(`/send-command/${response.data.created._id}`);
  };

  return (
    <div className="m-5 d-flex flex-column justify-content-center align-items-center">
      <h1>Guide your Rover through Mars</h1>
      <button onClick={handleCreateRover} className="btn btn-primary">
        Start
      </button>
    </div>
  );
}
