require("dotenv").config();
const app = require("./app"); // Adjust the path as needed
const { Sequelize } = require("sequelize");
const user = require("./models/user"); // Adjust the path as needed

const PORT = process.env.PORT || 3000;

// Sequelize setup
const sequelize = new Sequelize({
  dialect: "postgres", // Change this to 'mysql' or 'sqlite' if needed
  username: "postgres",
  password: "postgres",
  database: "jogeyEmail",
  host: "localhost",
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Define models
const User = user(sequelize);

// Attach models to the app
app.set("sequelize", sequelize);
app.set("User", User);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
