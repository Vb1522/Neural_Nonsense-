require("dotenv").config();

const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function test() {
  try {
    const chatCompletion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: "Hello",
        },
      ],
    });

    console.log(chatCompletion.choices[0].message.content);
  } catch (err) {
    console.error("FULL ERROR:");
    console.dir(err, { depth: null });
  }
}

test();