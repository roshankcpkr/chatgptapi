const { Configuration, OpenAIApi } = require("openai");


function Gpt(apiKey){
    this.configuration = new Configuration(apiKey);
    this.openai = new OpenAIApi(this.configuration);
    this.answer = async function (message)
    {
        try{
                const response = await this.openai.createCompletion({
                    model: "text-davinci-003",
                    prompt: `${message}`,
                    temperature: 0,
                    max_tokens: 4000,
                    top_p: 1.0,
                    frequency_penalty: 0.5,
                    presence_penalty: 0.0,
                    stop: ["You:"],
                });
                return response['data']['choices'][0]['text']
            }
        catch(error)
            {
                return error['response']['data']
            }

    }
}

module.exports = Gpt