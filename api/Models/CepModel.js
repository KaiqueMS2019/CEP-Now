const mongoose = require('mongoose')

const CepModel = mongoose.Schema({
    cep: {type: String, required: false},
    state: {type: String, required: false},
    city: {type: String, required: false},
    neighborhood: {type: String, required: false},
    street: {type: String, required: false},
})

module.exports = mongoose.model('cep', CepModel)