const express = require('express')

const router = express.Router()

const controller = require('../controllers/integrantes')

router.get("/", controller.getIntegrantes)

router.post("/", controller.createIntegrante)

router.get("/:id", controller.getIntegrante)

router.put("/:id", controller.editIntegrante)

router.delete("/:id", controller.deleteIntegrante)

module.exports = router