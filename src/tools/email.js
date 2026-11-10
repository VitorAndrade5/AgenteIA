const getEmails = {
    name: "getEmails",
    description: "Retorna todos os da caixa de entrada",
}
const sendEmail = {
    name: "sendEmail",
    description: "Envia um email para um contato",
     parameters: {
        type: "OBJECT",
        properties:{
            contact: {
                type: "STRING",
                description: "O nome do contato para enviar a mensagem",
            },
            message: {
                type: "STRING",
                description: "A mensagem a ser enviada",
            }
        },
        required: ["contact","message"]
    }
}

const allfunctions = [getEmails, sendEmail,];
export{allfunctions};