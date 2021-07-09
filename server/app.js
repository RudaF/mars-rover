const express = require("express");
const cors = require("cors");
require("./config/db.config.js")();

const app = express();

app.use(express.json());
app.use(cors());

const roverRouter = require("./routes/rover.routes");
app.use("/", roverRouter);

const port = 5000;

app.listen(port, () => console.log(`Server up and running at port ${port}`));
