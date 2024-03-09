const JWT = require("jsonwebtoken");

const secret = "$ecret@Key"

function createWebToken(user) {
    const payload = {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        profileImgURL: user.profileImgURL,
        role: user.role,
    }

    const token = JWT.sign(payload, secret);
    return token;
}


function validateWebToken(token) {
    const payload = JWT.verify(token, secret);
    return payload;
}

module.exports = {
    createWebToken,
    validateWebToken
}