const db = require('./db')
const cepPromise = require('cep-promise')

module.exports = function (app) {
   

    app.get('/', function (req, res) {
        
    //   let comparacao = db.collection('cep').find({$text: { $search: `${cep}` }})
        // if (cep != comparacao) { 
            const { cep } = req.query
            cepPromise(cep)
                .then(result => {
                    res.send(result)
                    // db.collection('cep').save(req.query)
                })
                .catch(console.log)
        // }
        // else{

        // }
        // res.render("")
    })
}