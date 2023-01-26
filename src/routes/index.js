const express = require("express");
// Routes
const indexRouter = require("./index.routes");
// Router
const router = express.Router();
// Create Routes
router.use(indexRouter);

module.exports = router;
