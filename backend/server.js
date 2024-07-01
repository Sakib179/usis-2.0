const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors()); // Correctly initialize CORS middleware
const dotenv = require("dotenv");
dotenv.config();

// Importing the routes
const userAuthRoute = require("./src/routes/public/userAuthRoute");
const userInfoRoute = require("./src/routes/private/userInfoRoute");
const advisngRoute = require("./src/routes/private/advisingRoute");

// Importing Middlewares
const authenticateToken = require("./src/middlewares/authenticateToken");

// Calling routes
app.use("/api/auth", userAuthRoute);
app.use("/api/user", authenticateToken, userInfoRoute);
app.use("/api/advising", authenticateToken, advisngRoute);

const PORT = process.env.API_PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
