const express = require("express");
const userRoute = require("./routes/userRoutes");

const app = express();
app.use(express.json());

app.use("/users", userRoute);

module.exports = app;
