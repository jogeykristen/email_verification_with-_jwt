const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { where } = require("sequelize");
const user = require("../models/user");

module.exports.createUser = async (req, res) => {
  try {
    const { email, phone_number } = req.body;
    console.log("body eamil = ", req.body.email, "email == ", email);
    var emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    regex = /^\d{10}$/;
    if (emailFormat.test(req.body.email)) {
      if (regex.test(req.body.phone_number)) {
        const emailExists = await User.findOne({
          where: { email: req.body.email },
        });
        if (emailExists) {
          return res.status(400).json("Email already registered");
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = await User.create({
          name: req.body.name,
          email: req.body.email,
          phone_number: req.body.phone_number,
          password: hashedPassword,
          role: req.body.role,
        });
        return res.status(200).json("New user created");
      } else {
        return res.status(400).json("enter an valid phone number");
      }
    } else {
      return res.status(400).json("Enter an valid email address");
    }
  } catch {
    console.log("Error = ", error);
    return res.status(500).json({ error: "Server error" });
  }
};

module.exports.login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const checkUser = await User.findOne({ where: { email } });
  if (!checkUser) {
    return res.status(401).json("The given email is incorrect");
  }
  const passwordMatch = await bcrypt.compare(password, checkUser.password);
  if (!passwordMatch) {
    return res.status(401).json("The password provided is wrong");
  }
  const token = jwt.sign({ userId: checkUser.id }, "jogey", {
    expiresIn: "1h",
  });

  // Send the token in the response
  return res.status(200).json({ Token: token });
};

module.exports.deleteUser = async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne({ where: { email } });
  if (!findUser) {
    return res.status(400).json("No users found with this mail id");
  }
  if (req.user && req.user.role === "admin") {
    // Perform the deletion
    await findUser.destroy();
    return res.status(200).json({ message: "User deleted successfully" });
  } else {
    // If the requesting user is not an admin, return a permission denied error
    return res.status(403).json({ message: "Permission denied" });
  }
};

module.exports.updateUser = async (req, res) => {
  const email = req.body.email;
  const phone_number = req.body.phone_number;
  const password = req.body.password;
  const updateUser = await User.findOne({ where: { email } });

  if (!updateUser) {
    return res.status(400).json("No users found with this mail id");
  }

  if (phone_number) {
    updateUser.phone_number = phone_number;
  }
  if (password) {
    hashedPassword = await bcrypt.hash(password, 10);
    updateUser.password = hashedPassword;
  }

  await updateUser.save();

  return res.status(200).json("Updated the details");
};
