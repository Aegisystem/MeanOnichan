const express = require('express')

const router = express.Router()
const controller = require('../controllers/integrantes')

const path = 'integrantes'

router.get(`/${path}`, controller.getData)

router.post(`/${path}`, controller.insertData)

module.exports = router