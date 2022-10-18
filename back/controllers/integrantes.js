const model = require('../modelos/integrantes')

exports.getData = (req, res) => {
    model.find({}, (err, data) => {
        if(err) console.log('Fallaste cargando los integrantes')
        res.send({
            data
        })
    })
}

exports.insertData = (req, res) => {
    const data = req.body
    model.create(data, (err, docs) => {
        if (err) {
            res.status(422.).send({ error: 'Error' })
        } else {
            res.send({ data: docs })
        }

    })
}

exports.insertData2 = (req, res) => {
    req.body = {ID_Integrante: 4, nombre: "PinguiGus", edad: 90, ocupacion: ["Profesor", "Ingeniero"]};

    model.create(req.body, (err, docs) => {
        if (err) {
            res.status(422.).send({ error: 'Error' })
        } else {
            res.send({ data: docs })
        }

    })
}

exports.updateData = (req, res) => {
    req.body = {ID_Integrante: 4, edad: 89};

    model.findOneAndUpdate({ID_Integrante: req.body["ID_Integrante"]}, {edad: req.body["edad"]}, {new: true}, (err, docs) => {
        if (err) {
            res.status(422.).send({ error: 'Error' })
        } else {
            res.send({ data: docs })
        }

    })
}

exports.updateData = (req, res) => {
    req.body = {ID_Integrante: 4, edad: 89};

    model.findOneAndDelete({ID_Integrante: req.body["ID_Integrante"]}, (err, docs) => {
        if (err) {
            res.status(422.).send({ error: 'Error' })
        } else {
            res.send({ data: docs })
        }

    })
}