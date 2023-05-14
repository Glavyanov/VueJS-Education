import { Configuration, OpenAIApi } from "openai";

const config = useRuntimeConfig();
const openaiConfig = new Configuration({
  apiKey: config.OPENAI_API_KEY,
});

export const $openai = new OpenAIApi(openaiConfig);
