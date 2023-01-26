const express = require("express");
// Routes
const userRouter = require("./users.routes");
// Router
const router = express.Router();
// Create Routes
router.use("/usuarios", userRouter);

module.exports = router;
