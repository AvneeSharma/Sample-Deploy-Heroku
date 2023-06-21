const express = require('express')
const app = express()

const PORT = process.env.PORT || 4444

app.get('/', (req, res) => {
    res.send('Hello World, it's Avnee')
})

app.listen(PORT, (req, res) => {
    console.log('Server started at http://localhost:${PORT}')
})
