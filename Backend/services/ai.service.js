const groq = require("../config/groq");

const generateResponse = async (prompt) => {
  try {
    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content:
            "You are an intelligent medical assistant. Give short, simple and helpful answers. Never claim to be a doctor and always advise consulting a healthcare professional.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.5,
      max_tokens: 300,
    });

    return response.choices[0].message.content;
  } catch (error) {
  console.error("Groq Error:");

  console.error(error.response?.data || error.message || error);

  throw error;
}
};

module.exports = {
  generateResponse,
};