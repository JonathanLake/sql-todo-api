const express = require('express');
const router = express.Router();


const user_controller = require('../controllers/userController');

// POST request for creating a user.
router.post('/create', user_controller.user_create);

// GET request for a list of all users.
router.get('/', user_controller.user_list);

module.exports = router;