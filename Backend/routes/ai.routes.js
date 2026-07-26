const express = require("express");

const router = express.Router();

const {
  symptomAnalysis,
  medicalChat,
} = require("../controllers/ai.controller");

router.post("/symptom-analysis", symptomAnalysis);

router.post("/chat", medicalChat);

module.exports = router;