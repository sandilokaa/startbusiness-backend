const admins = require("../models/admins.model");

class authRepository{


    /* ------------------  Get User By Email ------------------ */
    
    static async handleGetAdminByEmail({ email }){

        const getAdminByEmail = await admins.findOne({
            where: {
                email: email
            }
        });

        return getAdminByEmail;
    };
    
    /* ------------------  End Get User By Email ------------------ */ 


    /* ------------------  Registration User ------------------ */
    
    static async handleRegisterAdmin({ username, email, password }){

        const adminsInput = new admins({
            username,
            email,
            password
        });

        const handleRegisteredAdmin = await adminsInput.save();

        return handleRegisteredAdmin;
    }
    
    /* ------------------  End Registration User ------------------ */ 

};

module.exports = authRepository;