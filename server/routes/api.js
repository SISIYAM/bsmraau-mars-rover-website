const express = require("express");
const router = express.Router();

const { addMember, addTeam } = require("../controllers/InstertController");
const validateMember = require("../middlewares/validateMember");
const validateTeam = require("../middlewares/validateTeam");
const { fetchMembers, fetchTeams } = require("../controllers/FetchController");

// routes for insert
router.post("/create/member", validateMember, addMember);
router.post("/create/team", validateTeam, addTeam);

// routes for fetch
router.get("/fetch/members", fetchMembers);
router.get("/fetch/teams", fetchTeams);

module.exports = router;
