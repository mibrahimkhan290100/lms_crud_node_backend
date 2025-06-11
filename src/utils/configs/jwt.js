const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET
const EXPIRES = process.env.JWT_EXPIRES_IN || '1h'

function signToken(payload){
    return jwt.sign(payload , SECRET, {expiresIn: EXPIRES});
}

module.exports = {signToken};