const { validateWebToken } = require('../services/authentication');

function checkforAuthCookies(cookieName){
    return (req, res, next) => {
        const tokenCokiesvalue = req.cookies[cookieName];
        if (!tokenCokiesvalue) {
            return next();
        }

        try {
            const payload = validateWebToken(tokenCokiesvalue);
            req.user = payload;
        } catch (err) { }
        return next();
    }
}

module.exports = {
    checkforAuthCookies,
}