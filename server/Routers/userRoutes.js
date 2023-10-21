const userControllers = require('../Controllers/userController');
const { getAllChats } = require('../Controllers/userChats');
const {verifyToken} = require('../Middilewares/jwt-auth');
const express = require('express');
const router = express.Router();

router.route('/login').post(userControllers.userLogin);
router.route('/signup').post(userControllers.createUser);
router.route('/userDetails').get(verifyToken, userControllers.getUserDetails);
router.route('/listUsers').get(verifyToken, userControllers.getListUsers);
router.route('/userChats').get(verifyToken, getAllChats);

module.exports = router;