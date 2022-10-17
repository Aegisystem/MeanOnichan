const mongoose = require('mongoose')

const integrantesSchema = new mongoose.Schema({

    ID_Integrante: Number,
    nombre: {
        type: String,
        required: true
    },
    edad: Number,
    ocupacion: {
        type: [String],
        default: ["Estudiante, Ingeniero"]
    }
},
{
    versionKey: false,
    timestamps: true
}
);

module.exports = mongoose.model('integrantes', integrantesSchema);