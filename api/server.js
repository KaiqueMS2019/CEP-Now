const express = require ('express')
const app = express()
const PORT = 3001
const cors = require('cors')
const GetCep = require ('./routers/getCep')
const db = require('./config/db')




app.use(cors())

app.listen(PORT, () => console.log(`listening on port:${PORT}`))

app.use('/', GetCep )

app.post('/', (req, res) => {

})