const jwt = require('jsonwebtoken')
function authenticate(req, res, next){
    try {
        const c = req.cookies
        
        const token = req.header("Authorization");
        const decode = jwt.verify(token, "tanghotrungnam");
        req.user = decode
        next();
    } catch (error) {
        res.status(401).json(error)
    }
}

module.exports = {
    authenticate,
}