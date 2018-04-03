const User = require('../models/user');

// Handle user creation.
exports.user_create = async (req, res) => {
    const newUser = req.body;
    const user = await User.query().insert(newUser);
    res.send(user);
};

// Display list of all users.
exports.user_list = async (req, res) => {
    const users = await User.query();
    res.send(users);
};

// Display single user by id.
exports.user_get_by_id = async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await User.query().findById(userId);
        return res.send(user);
    
    } catch(err) {
        console.log('Cannot find user with that id.');
        return res.sendStatus(400);
    }
};