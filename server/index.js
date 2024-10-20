const express = require("express");
const cors = require("cors");
const connectToMongo = require("./db");

// create express app
const app = express();
const corsOptions = {
  origin: "[*]",
};

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors(corsOptions));
// connenct mongoDB
connectToMongo();

// constants
const port = process.env.PORT;
const api = require("./routes/api");

// default home route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: `Congratulation! Server is running on http://localhost:${port}`,
  });
});

// call api
app.use("/api/v1/", api);

// start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`http://localhost:${port}`);
});
