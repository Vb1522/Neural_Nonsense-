const { generateResponse } = require("../services/ai.service");

const symptomAnalysis = async (req, res) => {
  try {
    const { symptoms } = req.body;

    if (!symptoms) {
      return res.status(400).json({
        success: false,
        message: "Symptoms are required.",
      });
    }

    const prompt = `
Patient symptoms:
${symptoms}

Suggest the possible condition, precautions, and advise when to consult a doctor.
`;

    const result = await generateResponse(prompt);

    res.status(200).json({
      success: true,
      analysis: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const medicalChat = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Message is required.",
      });
    }

    const result = await generateResponse(message);

    res.status(200).json({
      success: true,
      reply: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  symptomAnalysis,
  medicalChat,
};