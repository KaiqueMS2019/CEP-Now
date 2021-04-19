const mongoClient = require("mongodb").MongoClient
const uri = "mongodb://localhost/cep"

mongoClient.connect(uri, {useUnifiedTopology: true},(error, connection) => {
    if(error) return console.log(error)
     global.connection = connection.db("cep")
     console.log("foi foi")
})


module.exports = {}
