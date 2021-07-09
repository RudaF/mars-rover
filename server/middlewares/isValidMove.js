const isValidMove = async (req, res, next) => {
  const invalidCommandsRegEx = /[^MLR]/gim;
  const { commands } = req.body;
  const isValid = commands ? !commands.match(invalidCommandsRegEx) : false;

  if (isValid) {
    return next();
  } else {
    return res.status(401).json({
      msg: "This command is not allowed, it will move the Rover out of bounds.",
    });
  }
};

module.exports = isValidMove;
