const jwt = require("jsonwebtoken");
const { JWT } = require("../libs/jwtSecurity");
const authRepository = require("../repositories/authRepository");
const usersRepository = require("../repositories/authRepository");

const authenticate = async (req, res, next) => {
    const authHeader = req.get("Authorization");

    let token = "";

    if (authHeader && authHeader.startsWith("Bearer"))
        token = authHeader.split(" ")[1];
    else
        return res.status(401).send({
            status: false,
            message: "You must be logged in to access this resource.",
            data: null,
        });

    try {
        const {
            email
        } = jwt.verify(token, JWT.SECRET);

        const getAdmin = await authRepository.handleGetAdminByEmail({
            email
        });

        req.admin = getAdmin;

        next();
    } catch (err) {
        return res.status(401).send({
            status: false,
            message: "Session has expired. Please login again!",
            data: null,
        });
    }
};

module.exports = { authenticate };