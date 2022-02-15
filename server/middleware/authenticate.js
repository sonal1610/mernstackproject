const jwt = require("jsonwebtoken");
const User = require("../model/users");
const cookieParser =require("cookie-parser");



const Authenticate = async (req, res, next) =>{
    try{
        const token = req.cookies.jwtoken;
        const verifytoken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await User.findOne({ _id: verifytoken._id, "tokens.token": token});

        if(!rootUser) { throw new Error('User Not Found') }

        req.token = token;
        req.rootUser = rootUser;
        req.userId = rootUser._id;

        next();

    }catch(err) {
        res.status(401).send('Unauthorized:No Token Provided');
    }

}

module.exports = Authenticate;