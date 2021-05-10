const {verifyToken} = require('../utils/jwt');

module.exports = {
    async checkTokens(req, res, next) {
        console.log(req.headers);
        console.log("");
        console.log(req.headers.authentication);
        if(req.headers.authentication === undefined) throw Error('You don\'t have the API Access');
        
        const accessToken = verifyToken(req.headers.authentication);
        // const refreshToken = verifyToken(req.cookies.refreshToken);

        if(accessToken === null) {
            // if(refreshToken == null) 
            //     throw Error('You don\'t have the API Access');
            // else {
                const newAccessToken = jwt.sign({userId, userName}, 
                    process.env.JWT_SECRET, {
                    expiresIn: '14d',
                    issuer: 'kayin'
                });
                res.localStorage.setItem('accessToken', newAccessToken);
                next();
            // }
        } else {
            next();
        //     if(refreshToken == null) {
        //         const newRefreshToken = jwt.sign({}, 
        //             process.env.JWT_SECRET, {
        //             expiresIn: '1h',
        //             issuer: 'kayin'
        //         });
        //         res.cookie('refreshToken', newRefreshToken);
        //         req.cookies.refreshToken = newRefreshToken;
        //         next();
        //     } else {
        //         next();
        //     }
        }
    },
    async checkUser(req, res, next) {
        const accessToken = verifyToken(req.headers.authentication);
        // const refreshToken = verifyToken(req.cookies.refreshToken);
        req.accessToken= accessToken;
        next();
    }
}