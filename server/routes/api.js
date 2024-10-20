const express = require("express");
const router = express.Router();

const { addMember } = require("../controllers/InstertController");
const validateMember = require("../middlewares/validateMember");

// routes
router.post("/create/member", validateMember, addMember);

module.exports = router;
