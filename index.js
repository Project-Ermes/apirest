const express = require("express");
const connectDB = require("./backend/config/db");
const {errorHandler} = require("./backend/middleware/errorMiddleware");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./backend/routes/users"));

app.use(errorHandler);

app.listen(port, () => {console.log(`Server started on port: ${port}.`)});