const express = require('express')
const initDB = require('./config/db')
const app = express()

const port = 3001

const integrantesRouters = require('./routes/integrantes')

app.use(integrantesRouters)
 

app.use(express.json())

app.use(express.urlencoded({
  extended: true
})
)

app.listen(port, () => {
    console.log('Online =D')
})

initDB()