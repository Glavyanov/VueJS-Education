import { $openai } from "../utils/openai";

export default defineEventHandler(async (event) => {
  const { message } = await readBody(event);
  const session = await useSession(event,{
    password: "aef52dbd-3490-49a5-abd4-f43f632864db"
  });

  const messages = session.data.messages || []; 
  messages.push({ role: "user", content: message });
  
  const data = await $openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are a helpful assistant for an AI-powered social media image generator",
      },
      ...messages,
    ],
    temperature: 0.7,
  });

  const responce = data.data.choices[0].message;
  messages.push({ role: "assistant", content: responce?.content });
  await session.update({messages});
  
  return responce
});
