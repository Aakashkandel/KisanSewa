const jwt = require('jsonwebtoken');


const auth = (req, res, next) => {
    const token = req.headers["Authorization"];
    console.log(token);


    if (!token) {
        return res.status(403).json({
            message: "Unauthorized Access",
            valid: false

        });
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decode;


        next();
    } catch (error) {
        return res.status(401).json({ message: "Token Mismatch" });
    }
};

module.exports = auth;
