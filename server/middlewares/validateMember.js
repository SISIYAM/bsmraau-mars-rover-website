const validateMember = (req, res, next) => {
  const { name, email, mobile, team, image } = req.body;

  if (!name || !email || !mobile || !team) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  const mobileRegex = /^\d{10,15}$/;
  if (!mobileRegex.test(mobile)) {
    return res.status(400).json({ message: "Invalid mobile number" });
  }

  next();
};

module.exports = validateMember;
