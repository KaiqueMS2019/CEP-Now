const db = require('../config/db')
const CepController = require('../Controllers/CepController')
const express = require('express')
const router = express.Router()


router.get('/', CepController.createCep )

module.exports = router