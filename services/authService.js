const authRepository = require("../repositories/authRepository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT } = require("../libs/jwtSecurity");
const SALT_ROUND = 10;


class authService {


    /* ==================================== ADMIN AUTHENTICATION ==================================== */


    /* ------------------  Registration Admin ------------------ */

    static async handleRegisterAdmin({ username, email, password }) {

        try {

            /* ------------------ Payload Validation ------------------ */

            if (!username) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Name must be filled!",
                    data: {
                        handleRegisterAdmin: null
                    }
                }
            };

            if (!email) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Email must be filled!",
                    data: {
                        handleRegisterAdmin: null
                    }
                }
            };

            if (!password) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Password must be filled!",
                    data: {
                        handleRegisterAdmin: null
                    }
                }
            } else if (password.length < 8) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Password minimum 8 characters!",
                    data: {
                        handleRegisterAdmin: null
                    }
                }
            };

            /* ------------------ End Payload Validation ------------------ */

            const getAdminByEmail = await authRepository.handleGetAdminByEmail({ email });

            if (getAdminByEmail) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Email has been used!",
                    data: {
                        handleRegisterAdmin: null
                    }
                }
            } else {
                const hashedPassword = await bcrypt.hash(password, SALT_ROUND);

                const handleRegisteredAdmin = await authRepository.handleRegisterAdmin({
                    username,
                    email,
                    password: hashedPassword
                });

                return {
                    status: true,
                    status_code: 201,
                    message: "Successfully registered admin",
                    data: {
                        handleRegisterAdmin: handleRegisteredAdmin
                    }
                }
            }
        } catch (err) {
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    handleRegisterAdmin: null,
                },
            };
        }
    };

    /* ------------------  End Registration Admin ------------------ */



    /* ------------------  Login Admin ------------------ */

    static async handleLoginAdmin({ email, password }) {

        try {

            /* ------------------ Payload Validation ------------------ */

            if (!email) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Email must be filled!",
                    data: {
                        handleLoginAdmin: null
                    }
                }
            };

            if (!password) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Password must be filled!",
                    data: {
                        handleLoginAdmin: null
                    }
                }
            } else if (password.length < 8) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Password minimum 8 characters!",
                    data: {
                        handleLoginAdmin: null
                    }
                }
            };

            /* ------------------ End Payload Validation ------------------ */

            const getAdminByEmail = await authRepository.handleGetAdminByEmail({ email });

            if (!getAdminByEmail) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Email not registered!",
                    data: {
                        handleLoginAdmin: null
                    }
                }
            } else {

                const isPasswordMatch = await bcrypt.compare(password, getAdminByEmail.password);

                if (isPasswordMatch) {

                    const token = jwt.sign({
                        id: getAdminByEmail.id,
                        email: getAdminByEmail.email
                    },
                        JWT.SECRET, {
                        expiresIn: JWT.EXPIRED,
                    });

                    return {
                        status: true,
                        status_code: 201,
                        message: "Admin successfully logged in!",
                        data: {
                            token
                        }
                    };
                } else {
                    return {
                        status: false,
                        status_code: 400,
                        message: "Email or Password is wrong!",
                        data: {
                            handleLoginAdmin: null
                        }
                    };
                }
            }
        } catch (err) {
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    handleLoginAdmin: null,
                },
            };
        }
    };

    /* ------------------  End Login Admin ------------------ */


    /* ==================================== END ADMIN AUTHENTICATION ==================================== */

};

module.exports = authService;