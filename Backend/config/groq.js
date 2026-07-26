const Groq = require("groq-sdk");

console.log("Groq Key:", process.env.GROQ_API_KEY);

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

module.exports = groq;