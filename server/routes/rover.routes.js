const router = require("express").Router();

const Rover = require("../models/Rover.model");
const isValidMove = require("../middlewares/isValidMove");
const attachNewPosition = require("../middlewares/attachNewPosition");

router.post("/", async (req, res) => {
  try {
    const newRover = await Rover.create({
      ...req.body,
    });
    return res.status(200).json({ msg: "Rover created", created: newRover });
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
});

router.patch("/", isValidMove, attachNewPosition, async (req, res) => {
  try {
    const movedRover = await Rover.findOneAndUpdate(
      {
        _id: req.body.id,
      },
      {
        $set: {
          currentPosition: req.newPosition,
          currentDirection: req.newDirection,
        },
        $push: { previousCommands: req.body.commands },
      },
      { new: true }
    );
    return res.status(200).json(movedRover);
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
});

router.get("/", async (req, res) => {
  try {
    const rovers = await Rover.find();
    return res.status(200).json(rovers);
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
});

router.delete("/", async (req, res) => {
  try {
    const deleted = await Rover.deleteOne({ _id: req.body.id });

    if (!deleted) {
      return res.status(404).json({ msg: "Rover not found," });
    }

    return res.status(200).json({ deleted });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: err });
  }
});

module.exports = router;
