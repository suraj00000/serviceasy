const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config({path:"../config.env"});

const JWT_SECRET= process.env.JWT_SECRET;

const fetchserviceprovider = (req,res,next)=>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send("please authenticate using a valid token1");
    }
    try {
        const data = jwt.verify(token,JWT_SECRET);
        req.serviceprovider = data.serviceprovider;
        next();
        
    } catch (error) {
        res.status(401).send("please authenticate using a valid token2");        
    }
}


module.exports = fetchserviceprovider;