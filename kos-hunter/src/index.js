require("dotenv").config();

const express = require("express");
const cors = require("cors");

const kosRoutes = require("./routes/kosRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", kosRoutes);
app.use("/api", authRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});