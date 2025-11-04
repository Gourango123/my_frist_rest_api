const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// Routes
app.use("/api/users", userRouter);

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to your REST API!");
});

module.exports = app;
