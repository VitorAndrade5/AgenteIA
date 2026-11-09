import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI();

const response = await ai.models.generateContent ({
    model: "gemini-3.8-flash",
    contents: [
        {
            role: "user",
            parts: [{ text: "que dia é hoje? "}]    
        }
    ],
    config: {
        tools: [
            {
                functionDeclarations: [
                    {name:"getTodayDate", description: "retorna a data de hoje no formato yyyy-mm-dd"}
                ]
            }
        ]
    }

});

console.log(response.candidates[0].content.parts);


