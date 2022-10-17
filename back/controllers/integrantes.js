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