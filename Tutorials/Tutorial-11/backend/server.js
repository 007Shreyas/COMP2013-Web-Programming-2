//Initialize the server
const express = require("express");
const User = require("./models/user");
const cors = require("cors"); // Import CORS middleware
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { default: mongoose } = require("mongoose");
const server = express();
const port = 3000;
require("dotenv").config();
const { DB_URI, SECRET_KEY } = process.env;

//Middleware
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors()); // Enable CORS for all routes

//Server start and DB connect
mongoose
  .connect(DB_URI)
  .then(() => {
    server.listen(port, () => {
      console.log(`Connected to DB\nServer listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

//Routes
//GET all users
server.get("/users", async (request, response) => {
  try {
    const users = await User.find();
    response.send(users);
  } catch (error) {
    response.status(400).send({ message: error.message() });
  }
});

//POST new user
server.post("/register", async (request, response) => {
  const { username, password } = request.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10); // hash the password with salt rounds = 10
    // Create a new user instance
    const newUser = new User({
      username,
      password: hashedPassword,
    });
    const result = await newUser.save();
    response.send({ message: "User Created" });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

//Login route
server.post("/login", async (request, response) => {
  const { username, password } = request.body;
  console.log(request.body);
  try {
    const user = await User.findOne({ username });
    if (!user) {
      // user not found
      return response.status(400).send({ message: "User not found!" });
    }

    // compare returns a promise when no callback is provided
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      // password does not match
      return response
        .status(400)
        .send({ message: "Incorrect username or password" });
    }

    // generate JWT only after successful authentication
    const jwtToken = jwt.sign({ id: user._id, username }, SECRET_KEY, {
      expiresIn: "1h",
    });
    return response
      .status(200)
      .send({ message: "User authenticated", token: jwtToken });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});
