const mongoose = require('mongose')

mongoose.connect('localhost:27017')

mongoose.connection.once('cep', function(){
    console.log('foi')
})