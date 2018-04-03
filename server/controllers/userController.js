const User = require('../models/user');


exports.user_create = async (req, res) => {
    const newUser = req.body;
    const user = await User.query().insert(newUser);
    res.send(user);
};

exports.user_list = async (req, res) => {
    const users = await User.query();
    res.send(users);
};