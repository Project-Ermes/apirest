// @desc    Get users
// @route   GET /api/users
// @access  Private
const getUsers = async (req, res) => {
    res.status(200).json({"message": `Retrieved all users`});
}

// @desc    Post user
// @route   POST /api/user/:id
// @access  Private
const postUser = async (req, res) => {
    res.status(200).json({"message": `Inserted user`});
}

// @desc    Update users
// @route   PATCH /api/users/:id
// @access  Private
const updateUser = async (req, res) => {
    res.status(200).json({"message": `Updated user ${req.params.id}`});
}

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private
const deleteUser = async (req, res) => {
    res.status(200).json({"message": `Deleted user ${req.params.id}`});
}

module.exports = {
    getUsers,
    postUser,
    updateUser,
    deleteUser,
}