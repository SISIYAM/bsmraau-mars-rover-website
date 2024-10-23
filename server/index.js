const express = require("express");
const cors = require("cors");
const connectToMongo = require("./db");
const path = require("path");
const cookieParser = require("cookie-parser");
// create express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// connenct mongoDB
connectToMongo();

// constants
const port = process.env.PORT;
const api = require("./routes/api");
const webRoutes = require("./routes/web");

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files (for CSS, JS, etc.)
app.use(express.static(path.join(__dirname, "public")));

// call api
app.use("/api/v1/", api);

//call web routes
app.use("/", webRoutes);

// start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`http://localhost:${port}`);
});
