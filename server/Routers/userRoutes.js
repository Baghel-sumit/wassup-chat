const userControllers = require('../Controllers/userController');
const verifyToken = require('../Middilewares/jwt-auth');
const express = require('express');
const router = express.Router();

router.route('/login').post(userControllers.userLogin);
router.route('/signup').post(userControllers.createUser);
router.route('/userDetails').get(verifyToken, userControllers.getUserDetails)

module.exports = router;