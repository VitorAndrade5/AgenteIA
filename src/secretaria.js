import { GoogleGenAI } from "@google/genai";

import {allFunctions as calendarFunctions} from "./tools/calendar.js";
import {allfunctions as emailFunctions} from "./tools/email.js";


const ai = new GoogleGenAI();

const allfunctions = calendarFunctions.concat(emailFunctions);

const contents = [
    {
        role: "user",
        parts: [{ text: "mande uma mensagem de aniversario bonita para a minha mãe. O contato 'mãe'"}]    
    }
];

var response = await ai.models.generateContent ({
    model: "gemini-3.8-flash",
    contents: contents,
    config: {
        tools: [{functionDeclarations: allfunctions}]
    }
});

console.log(response.candidates[0].content.parts[0])

// contents.push(response.candidates[0].content);

// contents.push({
//     role: "user",
//     parts: [
//         {
//         functionResponse: {
//             name: "getTodayDate",
//             response: { result: "2026-11-09"}
//         }
//     }
//  ]
// });


// response = await ai.models.generateContent ({
//     model: "gemini-3.8-flash",
//     contents: contents,
// });

// console.log(response.candidates[0].content)