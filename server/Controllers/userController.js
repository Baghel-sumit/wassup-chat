const User = require('../Database/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

const getUserDetails = async (req, res) => {
  const { userEmail } = req.user;
  try {
    const user = await User.findOne({ email: userEmail }).select('-password -__v');

    res.status(200).json({
      status: 'Success',
      body: {
        ...user
      }
    })
  } catch (error) {
    res.status(500).json({
      status: 'Failed',
      message: error?.message || 'failed to get user details',
      error
    })
  }
};

const getListUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password -__v');
    
    res.status(200).json({
      status: 'Success',
      body: users
    })
  } catch (error) {
    res.status(500).json({
      status: 'Failed',
      message: error?.message || 'failed to list users',
      error
    })
  }
}

const userLogin = async (req, res) => {
  const { userEmail, password } = req.body;
  try {
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      throw new Error("User not found!");
    }
    const match = bcrypt.compareSync(password, user.password);
    if(!match){
      throw new Error("Password is not matching!");
    }
    const token = jwt.sign({ userEmail }, process.env.ACCESS_TOKEN, { expiresIn: '1h' });

    delete user.password;

    res.status(200).json({
      status: 'Success',
      token,
      body: {
        ...user
      }
    })

  } catch (error) {
    res.status(500).json({
      status: 'Failed',
      message: error?.message || 'failed to login',
      error
    })
  }
};

const createUser = async (req, res) => {
  const { name, userEmail, password } = req.body;
  try {
    const user = await User.findOne({ email: userEmail });
    if (user?.email) {
      throw new Error("Already a user!");
    }
    hash = bcrypt.hashSync(password, saltRounds);
    const userDetails = {
      name,
      email: userEmail,
      password: hash
    };

    const updatedUser = await User.create(userDetails);
    delete updatedUser.password;
    delete updatedUser._id;
    delete updatedUser.__v;

    const token = jwt.sign({ userEmail }, process.env.ACCESS_TOKEN, { expiresIn: '1h' });
    res.status(200).json({
      status: 'Success',
      token,
      body: {
        ...updatedUser
      }
    })

  } catch (error) {
    res.status(500).json({
      status: 'Failed',
      message: error?.message || 'failed to create new user',
      error
    })
  }
};

module.exports = { getUserDetails, userLogin, createUser, getListUsers };