const loadLoginForm = (req, res) => {
  res.render("login", {
    success: true,
    message: "",
  });
};

const loadDashboard = (req, res) => {
  res.render("dashboard", {
    username: "siyam",
  });
};

module.exports = { loadLoginForm, loadDashboard };
