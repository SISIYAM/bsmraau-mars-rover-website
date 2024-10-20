const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  descriotion: {
    type: String,
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// create the model from the schema
const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
