const OpenAIAgent = require("./openai-agent");

class DeepseekAgent extends OpenAIAgent {
    constructor(apiKey, fileContentGetter, fileCommentator, model, reviewRulesContent, effort = null) {
        super(apiKey, fileContentGetter, fileCommentator, model, reviewRulesContent, "https://api.deepseek.com/", effort);
    }
}

module.exports = DeepseekAgent;
