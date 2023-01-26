const express = require("express");
const router = express.Router();
// Middlewares
//const { tokenVerification, checkEssentialInformation } = require("../middlewares");
// Controllers
const { createNewUser, loginUser, bringUserData } = require("../controllers/users.controllers");
// Routes
//router.post("/usuarios", checkEssentialInformation, createNewUser);
router.post("/", createNewUser);
//router.get("/usuarios", tokenVerification, bringUserData);
router.get("/", bringUserData);

router.post("/login", loginUser);

module.exports = router;
