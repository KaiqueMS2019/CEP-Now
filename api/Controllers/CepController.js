const CepModel = require('../Models/CepModel')
const cepPromise = require('cep-promise')

class CepController {

    async createCep(req, res) {
        let response = null
        const cep = req.query.cep
        const cachedCep = await CepModel.findOne({ cep })

        if (cachedCep) {
            response = cachedCep
        } else {
            const cepPromiseResponse = await cepPromise(cep)
            response = await CepModel.create(cepPromiseResponse)
        }
        res.send(response)

    }

}

module.exports = new CepController()