const jwt = require('jsonwebtoken');

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.sendStatus(401); // Unauthorized if token is missing
  }

  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach decoded payload to request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error(error);
    return res.sendStatus(403); // Forbidden if token is invalid
  }
};

module.exports = authenticateToken;
