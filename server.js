const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var path = require('path')
const router = express.Router()

app.use(bodyParser.json())

require('dotenv').config()

app.use('/static', express.static('public'))
app.use('/entity', require('./entity'))

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, '/index.html'))
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`)
})

module.exports = router 
