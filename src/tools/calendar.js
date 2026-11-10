const getTodayDate = {
    name: "getTodayDate",
    description: "retorna a data de hoje no formato yyyy-mm-dd"
}

const getEvents = {
    name: "getEvents",
    description: "Retorna os eventos do calendario para um determinado dia",
    parameters: {
        type: "OBJECT",
        properties:{
            date: {
                type: "STRING",
                description: "A data para qual queremos retornar os eventos, no formato yyyy-mm-dd"
            }
        },
        required: ["date"]
    }
}

const scheduleEvent = {
    name: "scheduleEvent",
    description: "Marca um novo evento na agenda",
    parameters: {
        type: "OBJECT",
        properties:{
            title: {
                type: "STRING",
                description: "O titulo do evento"
            },
            date: {
                type: "STRING",
                description: "A data do evento, no formato yyyy-mm-dd"
            },
            time:{
                type: "STRING",
                description: "A hora do evento, no formato HH-MM"  
            },
            attendees: {
                type: "ARRAY",
                items: {type: "STRING"},
                description: "Lista de nomes de convidados para o evento",
            }
        },
        required: ["title","date","time"]
    }
}

const rescheduleEvent = {
    name: "rescheduleEvent",
    description: "Remarcar um evento na agenda para um novo horario",
    parameters: {
        type: "OBJECT",
        properties:{
            title: {
                type: "STRING",
                description: "O titulo do event para remarcar"
            },
            date: {
                type: "STRING",
                description: "A data do evento, no formato yyyy-mm-dd"
            },
            newtime:{
                type: "STRING",
                description: "A nova hora do evento, no formato HH-MM"  
            },
        },
        required: ["title","date","newtime"]
    }
}
const allFunctions = [getTodayDate, getEvents, scheduleEvent, rescheduleEvent];
export{allFunctions};