const bcrypt = require('bcrypt');

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS , 10) || 10;

async function hashPassword(plainText) {
    return bcrypt.hash(plainText , SALT_ROUNDS);
}

async function verifyPassword(hash , plainText) {
    return bcrypt.compare(plainText , hash);
}

module.exports = {hashPassword , verifyPassword};