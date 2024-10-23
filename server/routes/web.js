const express = require("express");
const {
  loadLoginForm,
  loadDashboard,
} = require("../controllers/AdminDashboardController");
const router = express.Router();

// route for load login form
router.get("/", loadLoginForm);

// route for load dashboard

router.get("/dashboard", loadDashboard);

module.exports = router;
