const express = require('express');
const {RegisterUser} = require('../controllers/authController');
const authRouter = express.Router();

authRouter.post('/register' , RegisterUser)

module.exports = authRouter



