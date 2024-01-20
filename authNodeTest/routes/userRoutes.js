// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const authenticateUser = require("../middleware/authentication");

// Define user routes
router.post("/createuser", userController.createUser);
router.post("/verify", userController.verify);
router.post("/login", userController.login);
router.post("/delete", authenticateUser, userController.deleteUser);
router.post("/update", userController.updateUser);

// Add more routes as needed

module.exports = router;
