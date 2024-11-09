// frontend/src/utils/generateWorkoutTip.js

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI('AIzaSyDz99HtWh4n26-iFyOxLrFr2su40D0Lz-I');
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function fetchWorkoutTip() {
    try {
      const prompt = "Provide a brief, motivational workout tip for today in plain text";
      const result = await model.generateContent(prompt);
      return result.response.text();
    } catch (error) {
      console.error("Error generating workout tip:", error);
      return "Stay active and stay healthy!";
    }
  }
  
  module.exports = fetchWorkoutTip;