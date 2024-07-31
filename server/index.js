const express = require('express')
const app = express()

app.use('/', (req, res) => {
    res.send('Server running.')
})

app.get('/', (req, res) => {
    res.send('GET request to homepage')
})

app.post('/', (req, res) => {
    res.send('POST request to homepage')
})

app.listen(5000, console.log('Server started on PORT 5000'));