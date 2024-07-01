const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { modelUserInfoLogin, modelRegisterUser } = require("../../models/usersModel");

// # LOGIN
const controlPostLogin = async (req, res) => {
  const { email, password, rememberMe } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide both email and password." });
  }

  try {
    const users = await modelUserInfoLogin(email);
    if (users.length === 0) {
      return res
        .status(401)
        .json({ message: "No account exists with this email." });
    }

    const { user_email, password: password_hash, account_type } = users[0];

    const passwordMatch = await bcrypt.compare(password, password_hash);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Password is incorrect." });
    }

    const tokenPayload = { user_email };
    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {
      expiresIn: rememberMe ? "7d" : "2h",
    });

    res.json({
      message: "Login successful",
      accountType: account_type,
      token,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send(
        "Could not get the user info"
      );
  }
};

// # NEW USER REGISTRATION #
const controlPostRegister = async (req, res) => {
  const { accountType, email, password } = req.body;
  console.log(req.body);

  if (!email || !password || !accountType) {
    return res.status(400).json({
      message: "Please provide an account type, email, and password.",
    });
  }

  try {
    const users = await modelUserInfoLogin(email);
    if (users.length !== 0) {
      return res
        .status(401)
        .json({ message: "Account already exists with this email" });
    }

    // Hash password accountType
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new user with hashed password
    await modelRegisterUser({ accountType, email, password: hashedPassword });
    res.status(201).json({ message: "New user created" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send(
        "An error occurred during the signup process. Please try again later."
      );
  }
};

// Export the controllers
module.exports = {
  controlPostLogin,
  controlPostRegister,
};
