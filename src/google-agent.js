const OpenAIAgent = require("./openai-agent");

class GoogleAgent extends OpenAIAgent {
    constructor(apiKey, fileContentGetter, fileCommentator, model, reviewRulesContent, effort = null) {
        super(apiKey, fileContentGetter, fileCommentator, model, reviewRulesContent, "https://generativelanguage.googleapis.com/v1beta/openai/", effort);
    }
}

module.exports = GoogleAgent;
