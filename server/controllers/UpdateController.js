const Member = require("../models/Member");
const Team = require("../models/Team");

// method for update member
const updateMember = async (req, res) => {
  try {
    // get id from params
    const { id } = req.params;

    const updatedMember = await Member.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedMember) {
      return res.status(404).json({ message: "Member not found" });
    }

    res.status(200).json({
      message: "Member updated successfully",
      data: updatedMember,
    });
  } catch (error) {
    console.error("Error deleting member:", error);

    res.status(500).json({
      message: "Failed to delete member",
      error: error.message,
    });
  }
};

// method for update teams
const updateTeam = async (req, res) => {
  try {
    // get id from params
    const { id } = req.params;

    const updatedTeam = await Member.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedTeam) {
      return res.status(404).json({ message: "Team not found" });
    }

    res.status(200).json({
      message: "Team updated successfully",
      data: updatedTeam,
    });
  } catch (error) {
    console.error("Error deleting team:", error);

    res.status(500).json({
      message: "Failed to delete team",
      error: error.message,
    });
  }
};

module.exports = {
  updateMember,
  updateTeam,
};
