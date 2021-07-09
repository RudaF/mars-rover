const executeCommand = (command, currentPosition, currentDirection) => {
  const directions = "nesw";
  const increments = {
    n: { x: 0, y: 1 },
    e: { x: 1, y: 0 },
    s: { x: 0, y: -1 },
    w: { x: -1, y: 0 },
  };
  let newPosition = currentPosition;
  let newDirection = currentDirection.toLowerCase();

  if (command.toLowerCase() === "r") {
    newDirection =
      directions[(directions.indexOf(currentDirection.toLowerCase()) + 1) % 4];
  } else if (command.toLowerCase() === "l") {
    newDirection =
      currentDirection.toLowerCase() === "n"
        ? "w"
        : directions[directions.indexOf(currentDirection.toLowerCase()) - 1];
  } else {
    const newX =
      currentPosition.x + increments[currentDirection.toLowerCase()].x;
    const newY =
      currentPosition.y + increments[currentDirection.toLowerCase()].y;
    newPosition = { x: newX, y: newY };
  }
  return { newPosition: newPosition, newDirection: newDirection.toUpperCase() };
};

module.exports = executeCommand;
