const { Schema, model } = require("mongoose");

const RoverSchema = new Schema({
  previousCommands: [{ type: String }],
  currentPosition: {
    x: { type: Number },
    y: { type: Number },
  },
  currentDirection: {
    type: String,
    required: true,
    enum: ["N", "S", "E", "W"],
  },
});

const RoverModel = model("User", RoverSchema);

module.exports = RoverModel;
