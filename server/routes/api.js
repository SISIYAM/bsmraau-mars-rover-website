const express = require("express");
const router = express.Router();

const { addMember, addTeam } = require("../controllers/InstertController");
const validateMember = require("../middlewares/validateMember");
const validateTeam = require("../middlewares/validateTeam");

// routes
router.post("/create/member", validateMember, addMember);
router.post("/create/team", validateTeam, addTeam);

module.exports = router;
