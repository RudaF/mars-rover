const executeCommand = require("./executeCommand");

const walk = (currentPosition, currentDirection, commands, boardSize) => {
  let newPosition = currentPosition;
  let newDirection = currentDirection;
  commands.split("").forEach((command) => {
    const newAtributes = executeCommand(command, newPosition, newDirection);
    console.log(newAtributes);
    newPosition = newAtributes.newPosition;
    newDirection = newAtributes.newDirection;
  });
  return { newPosition: newPosition, newDirection: newDirection };
};

module.exports = walk;
