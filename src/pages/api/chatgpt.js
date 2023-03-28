import { Configuration, OpenAIApi } from "openai";

// dotenv.config({ path: __dirname + "/.env" });

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_CHATGPT_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured",
      },
    });
    return;
  }

  const messages = req.body.messages;
  console.log(messages)

  const response = await openai.createCompletion({
    model: "gpt-3.5-turbo",
    messages: messages
  });

  res.status(200).json({ result: response.data.choices[0] });
}
