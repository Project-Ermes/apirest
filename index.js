const express = require("express");
const connectDB = require("./config/db.js");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
//app.use(express.urlencoded({ extended: false }));

//app.use("/users", require("./routes/users"));

app.listen(port, () => {`Server listening on port: ${port}...`});