const Cep = require('../Models/Cep')
const cepPromise = require('cep-promise')

class CepController {

    async createCep(req, res) {

        const data = () =>{
            const { cep } = req.query
        cepPromise(cep)
        .then(result => {
            res.send(result)
        })
        .catch(console.log);
        }
        
        await Cep.create(data, (err) => {
            if (err) return res.status(400).json({
                error: true,
                message: "Erro ao tentar inserir"
            })

            return res.status(200).json({
                error: false,
                message: "cep cadastrado"
            })
        })


    }


}

module.exports = new CepController()