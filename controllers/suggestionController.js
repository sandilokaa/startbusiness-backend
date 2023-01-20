const suggestionService = require("../services/suggestionService");


/* ------------------  Create Suggestion ------------------ */ 

const handleCreateSuggestions = async(req, res) => {
    
    const { username, email, suggestion } = req.body;

    const { status, status_code, message, data } = await suggestionService.handleCreateSuggestions({ 
        username,
        email,
        suggestion
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data
    });

};

/* ------------------  End Create Suggestion ------------------ */ 


module.exports = { handleCreateSuggestions };