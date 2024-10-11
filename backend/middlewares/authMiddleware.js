const jwt = require('jsonwebtoken');

const authMiddleware = (req,res,next)=>{
    const token = req.headers[authorization];
    if(!token){
        res.status(401).json({error:"Access denied token missing"});
    }
    try {
        const decoded = jwt.verify(token,'secret');
        req.userId=decoded.userId;
        next();
    }catch(error){
        res.status(400).json({error:"Invalid token"});
    }
}
module.exports = {authMiddleware};