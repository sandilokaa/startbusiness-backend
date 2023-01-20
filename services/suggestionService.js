const suggestionRepository = require("../repositories/suggestionRepository");


class suggestionService {


    /* ------------------  Create Suggestion ------------------ */ 

    static async handleCreateSuggestions({ username, email, suggestion }){

        try {
            
            /* ------------------ Payload Validation ------------------ */

            if (!username) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Name must be filled!",
                    data: {
                        handleCreateSuggestions: null
                    }
                }
            };

            if (!email) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Email must be filled!",
                    data: {
                        handleCreateSuggestions: null
                    }
                }
            };

            if (!suggestion) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Suggestion must be filled!",
                    data: {
                        handleCreateSuggestions: null
                    }
                }
            }

            /* ------------------ End Payload Validation ------------------ */

            const createdSuggestion = await suggestionRepository.handleCreateSuggestions({
                username,
                email,
                suggestion
            });

            return {
                status: true,
                status_code: 201,
                message: "Successfully create suggestion",
                data: {
                    handleCreateSuggestions: createdSuggestion
                }
            }

        } catch (err) {
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    handleCreateSuggestions: null,
                },
            };
        }

    };

    /* ------------------  End Create Suggestion ------------------ */ 


};

module.exports = suggestionService;