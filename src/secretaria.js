import { FunctionResponse, GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI();

const contents = [
    {
        role: "user",
        parts: [{ text: "Qual a temperatura no Brasil?"}]    
    }
];

var response = await ai.models.generateContent ({
    model: "gemini-3.8-flash",
    contents: contents,
    config: {
        tools: [
            {
                functionDeclarations: [
                    {name:"getTodayDate", description: "retorna a data de hoje no formato yyyy-mm-dd"},
                    
                    {
                        name: "getCountryTemperature",
                     description: "Retorna a temperatura do país indicado",
                     parameters: {
                        type:"OBJECT",
                        properties: {
                            country: {
                                type: "STRING",
                                description: "País para qual se quer saber a temperatura"
                            }
                        }
                     }       
                    }
                ]
            }
        ]
    }


});

console.log(response.candidates[0].content.parts)

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