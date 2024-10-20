const Member = require("../models/Member");

const addMember = async (req, res) => {
  try {
    const { name, email, mobile, team, image } = req.body;

    const newMember = new Member({ name, email, mobile, team, image });

    const savedMember = await newMember.save();

    res.status(201).json({
      message: "Document inserted successfully",
      data: savedMember,
    });
  } catch (error) {
    console.error("Error inserting document:", error);

    res.status(500).json({
      message: "Failed to insert document",
      error: error.message,
    });
  }
};

module.exports = { addMember };
