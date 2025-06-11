const express = require('express');
const {RegisterUser, LoginUser, RefreshTokenVerify} = require('../controllers/authController');
const authRouter = express.Router();

authRouter.post('/register' , RegisterUser)
authRouter.post('/login' , LoginUser)
authRouter.post('/refresh-token' , RefreshTokenVerify);

module.exports = authRouter



