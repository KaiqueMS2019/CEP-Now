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
        })
        .catch( (error) =>{
        })
    }
    
}


module.exports = new Connection
