const suggestions = require("../models/suggestions.model");

class suggestionRepository {

    /* ------------------  Create Suggestion ------------------ */ 

    static async handleCreateSuggestions({ username, email, suggestion }){

        const suggestionsInput = new suggestions({
            username,
            email,
            suggestion
        });

        const createdSuggestion = await suggestionsInput.save();

        return createdSuggestion;
    }

    /* ------------------  End Create Suggestion ------------------ */ 

};

module.exports = suggestionRepository;