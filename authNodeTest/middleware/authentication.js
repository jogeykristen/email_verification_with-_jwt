const jwt = require("jsonwebtoken");
const { User } = require("../models");

const authenticateUser = async (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, "jogey"); // Replace 'yourSecretKey' with your actual secret key
    console.log("decoded ==== ", decoded);

    if (decoded.exp <= Date.now() / 1000) {
      return res.status(401).json({ error: "Token has expired" });
    }

    const user = await User.findByPk(decoded.userId);
    console.log("user == ", user);

    if (!user) {
      throw new Error("User not found");
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = authenticateUser;
