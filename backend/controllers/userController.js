// @desc    Get users
// @route   GET /api/users
// @access  Private
const getUsers = (req, res) => {
if (!req.body.text) {
    res.status(400)
    throw new Error("")
}

    res.status(200).json({"message": `Retrieved all users`});
}

// @desc    Post user
// @route   POST /api/user/:id
// @access  Private
const postUser = (req, res) => {
    res.status(200).json({"message": `Inserted user`});
}

// @desc    Update users
// @route   PATCH /api/users/:id
// @access  Private
const updateUser = (req, res) => {
    res.status(200).json({"message": `Updated user ${req.params.id}`});
}

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private
const deleteUser = (req, res) => {
    res.status(200).json({"message": `Deleted user ${req.params.id}`});
}

module.exports = {
    getUsers,
    postUser,
    updateUser,
    deleteUser,
}