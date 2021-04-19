const mongodb = require('mongodb')
const mongoose = require('mongoose')
const uri = "mongodb://localhost/cep"

class Connection {
    constructor() {
        this.dataBaseConnectionMongoDB()
    }

    dataBaseConnectionMongoDB() {
        this.mongoDBConnection = mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })
        .then(() => {
            console.log("foi foi foi")
        })
        .catch( (error) =>{
            console.log("deu ruim")
        })
    }
    
}


module.exports = new Connection
