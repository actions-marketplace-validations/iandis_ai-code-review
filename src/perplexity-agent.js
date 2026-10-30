const OpenAIAgent = require("./openai-agent");

class PerplexityAgent extends OpenAIAgent {
    constructor(apiKey, fileContentGetter, fileCommentator, model, reviewRulesContent, effort = null) {
        super(apiKey, fileContentGetter, fileCommentator, model, reviewRulesContent, "https://api.perplexity.ai/", effort);
    }
}

module.exports = PerplexityAgent;
