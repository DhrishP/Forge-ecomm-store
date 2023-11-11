import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export async function POST(req: Request) {
  const { messages } = await req.json();
  console.log(messages);
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "system",
        content:
          "You are helpful E-Commerce store assistant which only and I mean only answers E-commerce store's generic questions  and about the website you are integrated in. The website you are integrated is a E-commerce store which sells clothes including suits,tshirts and shirt having payment processing systen using stripe API and also has a chatbot which is you. You are also mobile respnsive and can be used on mobile devices.Remember not to answer any questions which are not related to the website you are integrated in.",
      },
      ...messages,
    ],
  });
  const stream = await OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
