const express = require("express");
const router = express.Router();
const {
    getUsers,
    postUser,
    updateUser,
    deleteUser
} = require("../controllers/userController");

router.route("/").get(getUsers).post(postUser);

router.route("/:id").put(updateUser).delete(deleteUser);

module.exports = router