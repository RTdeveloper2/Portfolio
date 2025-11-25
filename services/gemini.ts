import { GoogleGenAI } from "@google/genai";
import { CHAT_SYSTEM_INSTRUCTION } from "../constants";

let ai: GoogleGenAI | null = null;

export const initializeGemini = () => {
  if (process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
};

export const sendMessageToGemini = async (message: string, history: { role: string; parts: { text: string }[] }[]) => {
  if (!ai) initializeGemini();
  
  if (!ai) {
    // Fallback if no API key is present in environment (e.g. demo mode)
    return "I'm sorry, I cannot connect to the AI service at the moment (Missing API Key). However, feel free to email Rahul directly!";
  }

  try {
    const chat = ai.chats.create({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: CHAT_SYSTEM_INSTRUCTION,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm having trouble retrieving that information right now. Please try again later.";
  }
};