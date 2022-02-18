const express = require("express");
const cors = require("cors");
const color = require("colors");
const dotenv = require("dotenv").config();
const connectDB = require("./database/db.js");
const port = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/docs", require("./routes/docRoutes"));

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}/`);
});
