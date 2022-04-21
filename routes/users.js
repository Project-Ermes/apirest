const express = require("express");
const { database } = require("../config/db.js");
const router = express.Router();
router.use(express.json());

/* GET METHODS FOR USERS */
