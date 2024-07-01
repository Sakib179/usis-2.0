const express = require("express");
const router = express.Router();
const {
  controlPostLogin,
  controlPostRegister,
} = require("../../controllers/public/userAuthController");

// Log in
router.post("/login", async (req, res) => {
  try {
    const result = await controlPostLogin(req, res); // Assuming postLogin returns a promise
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

// New user registration
router.post("/register", async (req, res) => {
  await controlPostRegister(req, res); // Assuming postRegister returns a promise
});

// Export the router
module.exports = router;
