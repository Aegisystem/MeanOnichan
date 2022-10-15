const express = require('express')
const initDB = require('./db')
const bodyParser = require('body-parser')
const app = express()

const port = 3001

app.use(
    bodyParser.json({
        limit: '20mb'
    })
)

app.use(
    bodyParser.urlencoded({
        limit: '20mb',
        extended: true
    })
)

app.get('/', (req, res) => {
    res.send({
        data: 'Hola Mundasdo'
    })
})

app.listen(port, () => {
    console.log('Online =D')
})
