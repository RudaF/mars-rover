const Rover = require("../models/Rover.model");
const walk = require("../functions/walk");

const attachNewPosition = async (req, res, next) => {
  try {
    const { id, commands } = req.body;

    const rover = await Rover.findOne({ _id: id });

    const { currentPosition, currentDirection } = rover;
    const { newPosition, newDirection } = walk(
      currentPosition,
      currentDirection,
      commands,
      5
    );
    if (
      newPosition.x < 5 &&
      newPosition.y < 5 &&
      newPosition.x >= 0 &&
      newPosition.y >= 0
    ) {
      req.newPosition = newPosition;
      req.newDirection = newDirection;
      return next();
    } else {
      return res
        .status(400)
        .json({ msg: "These commands will send the rover out of bounds!" });
    }
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
};

module.exports = attachNewPosition;
