const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI,  { useNewUrlParser: true, useUnifiedTopology: true });

const integrantesSchema = new mongoose.Schema({

    ID_Integrante: Number,
    nombre: String,
    edad: Number,
    ocupacion: [String]
});

module.exports = mongoose.model('integrantes', integrantesSchema);