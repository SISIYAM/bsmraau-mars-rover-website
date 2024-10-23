const jwt = require("jsonwebtoken");
const User = require("../models/User");
const JWT_SECRET = process.env.JWT_SECRET;

const loadLoginForm = (req, res) => {
  res.render("login", {
    success: true,
    message: "",
  });
};

const loadDashboard = async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.redirect("/login");
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.user.id);

    if (!user) {
      return res.redirect("/login");
    }

    res.render("dashboard", { username: user.username });
  } catch (error) {
    console.error("Error loading dashboard:", error);
    return res.redirect("/login");
  }
};

module.exports = { loadLoginForm, loadDashboard };
