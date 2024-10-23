const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) return res.redirect("/login");

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.redirect("/login");
    req.user = user;
    next();
  });
};

// Middleware to check if user is already logged in
const checkAuthenticated = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return next();
      }
      return res.redirect("/dashboard"); // Redirect logged-in users to the dashboard
    });
  } else {
    next();
  }
};

module.exports = { authenticateToken, checkAuthenticated };
