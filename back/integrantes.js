const mongoose = require('mongoose')

const IntegrantesScheme = new mongoose.Schema({

    ID_Integrante: {
        type: int
    },
    nombre: {
        type: String,
    },
    edad:  {
        type: int
    },
    ocupacion: {
        type: String
    }
})

module.exports = mongoose.model('integrantes', IntegrantesScheme)