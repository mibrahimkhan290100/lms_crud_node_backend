const express = require('express');
const {RegisterUser, LoginUser} = require('../controllers/authController');
const authRouter = express.Router();

authRouter.post('/register' , RegisterUser)
authRouter.post('/login' , LoginUser)

module.exports = authRouter



