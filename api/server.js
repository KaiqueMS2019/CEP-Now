const express = require ('express')
const app = express()
const PORT = 3001
const cors = require('cors')
const GetCep = require ('./routers/getCep')

GetCep(app)


app.use(cors())

app.listen(PORT, () => console.log(`listening on port:${PORT}`))

app.get('/', (req, res) => {
        res.send('router/getCep')
       
} )

app.post('/', (req, res) => {

})