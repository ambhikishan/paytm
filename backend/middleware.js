const jwt = require("jsonwebtoken");
const secret =  require("./config")

const authMiddleWare = (req,res,next)=>{
    var authHeader = req.headers.authorization;
    
    if(!authHeader || !authHeader.startsWith("Bearer")){
        res.status(403).json({})
        return
    }

    var token = authHeader.split(" ")[1]

    try {
        var decoded = jwt.verify(token,secret)
        req.userId = decoded.userId
        next()
    } catch (error) {
        res.status(403).json({})
    }
}

module.exports = {
    authMiddleWare : authMiddleWare
}