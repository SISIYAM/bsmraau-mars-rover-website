const express = require("express");
const {
  loadLoginForm,
  loadDashboard,
} = require("../controllers/AdminDashboardController");
const {
  authenticateToken,
  checkAuthenticated,
} = require("../middlewares/checkLoginMiddleware");
const { validateEjsLogin } = require("../middlewares/validateUser");
const { loginEjsUser, logoutUser } = require("../controllers/AuthController");
const router = express.Router();

// route for load login form
router.get("/", (req, res) => {
  return res.redirect("/dashboard");
});
router.get("/login", checkAuthenticated, loadLoginForm);

// route for load dashboard
router.get("/dashboard", authenticateToken, loadDashboard);

// route for authentication
router.post("/login", checkAuthenticated, validateEjsLogin, loginEjsUser);
router.get("/logout", logoutUser);

module.exports = router;
