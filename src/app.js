const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
// Import Middlewares
const { morganHechizo } = require("./middlewares");
// Basic starting points
const app = express();
// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morganHechizo);
// Routes
const routing = require("./routes/index.routes");
// App
app.use(routing);
// Catcher
app.get("*", (req, res) => {
  res.status(404).send({ msg: "Ruta not found" });
});

module.exports = app;
