const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });

const JWT_SECRET = process.env.JWT_SECRET;

const fetchuser = (req,res,next)=>{
    // get the user from the jwt token and add to req object
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error:"plese authenticate using a valid token"});
    }
    try {
        const data = jwt.verify(token,JWT_SECRET);
        req.user = data.user;
        next();        
    } catch (error) {
        res.status(401).send({error:"plese authenticate using a valid token"});
    }
    
}

module.exports = fetchuser;