var path = require('path')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const axios = require('axios')
const dotenv = require('dotenv')
const mockAPIResponse = require('./mockAPI.js')

dotenv.config()

const API = process.env.API_KEY

const app = express()

app.use(express.static('dist'))

app.use(cors())
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'dist')))

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
const port = process.env.PORT || 8081
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/api', (req, res) => {
    axios.post(`https://api.meaningcloud.com/sentiment-2.1?key=${API}&txt=${req.body.text}&lang=auto`)
        .then((result) => {
            res.send(result.data)
            console.log(result.data);
        })
})
