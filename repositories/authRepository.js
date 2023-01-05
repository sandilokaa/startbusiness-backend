const adminModel = require("../models/admin.model");

class authRepository{


    /* ------------------  Get User By Email ------------------ */
    
    static async handleGetAdminByEmail({ email }){

        const getAdminByEmail = await adminModel.findOne({
            where: {
                email: email
            }
        });

        return getAdminByEmail;
    };
    
    /* ------------------  End Get User By Email ------------------ */ 


    /* ------------------  Registration User ------------------ */
    
    static async handleRegisterAdmin({ username, email, password }){

        const adminModelInput = new adminModel({
            username,
            email,
            password
        });

        const handleRegisteredAdmin = await adminModelInput.save();

        return handleRegisteredAdmin;
    }
    
    /* ------------------  End Registration User ------------------ */ 

};

module.exports = authRepository;