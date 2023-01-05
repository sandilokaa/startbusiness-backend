const authService = require("../services/authService");


/* ------------------  Registration Admin ------------------ */ 

const handleRegisterAdmin = async (req, res) => {

    const { username, email, password } = req.body;

    const { status, status_code, message, data } = await authService.handleRegisterAdmin({ 
        username,
        email,
        password
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data
    });

}

/* ------------------  End Registration Admin ------------------ */ 


/* ------------------  Login Admin ------------------ */ 

const handleLoginAdmin = async (req, res) => {

    const { email, password } = req.body;

    const { status, status_code, message, data } = await authService.handleLoginAdmin({
        email,
        password
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data
    });
}

/* ------------------  End Login Admin ------------------ */ 

module.exports = { 
    handleRegisterAdmin,
    handleLoginAdmin 
};