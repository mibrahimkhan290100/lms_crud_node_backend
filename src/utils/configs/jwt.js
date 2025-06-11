const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET
const EXPIRES = process.env.JWT_EXPIRES_IN || '1h'
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET
const REFRESH_EXPIRES = process.env.JWT_REFRESH_EXPIRES_IN;

function signAccessToken(payload){
    return jwt.sign(payload , SECRET, {expiresIn: EXPIRES});
}

function signRefreshToken(payload){
    return jwt.sign(payload , REFRESH_SECRET , {expiresIn:REFRESH_EXPIRES});
}

function verifyRefreshToken(token){
    return jwt.verify(token, REFRESH_SECRET);
}

module.exports = {signAccessToken , signRefreshToken , verifyRefreshToken};