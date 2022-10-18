const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const initDB = require('./config/db')

const app = express()

const port = 3001

app.set("port", port)

app.use(cors())
app.use(express.json())

app.use(express.urlencoded({
  extended: false
})
)

app.use(morgan('dev'))

app.use("/api/integrantes", require('./routes/integrantes'))

app.listen(port, () => {
    console.log('Online =D')
})

initDB()