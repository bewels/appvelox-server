const jwt = require('jsonwebtoken');
const config = require('./../config/config');

module.exports = (req, res, next) => {
    if(req.method === 'OPTION') {
        return next();
    }

    try{
        const token = req.headers.authorization.split(' ')[1];

        if(!token) {
            return res.status(401).json({massage: 'Необходимо войти в свой аккаунт', notAuth: true});
        }

        const decoded = jwt.verify(token, config.SECRET_KEY);
        req.body.user = decoded;
        next();
    } catch(e) {
        res.status(401).json({massage: 'Необходимо войти в свой аккаунт', notAuth: true});
    }

}