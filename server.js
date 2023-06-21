const express = require('express')
const app = express()

const PORT = process.env.PORT || 4444

app.get('/', (req, res) => {
    res.send('Avnee says hello!')
})

app.listen(PORT, (req, res) => {
    console.log('Server started at http://localhost:${PORT}')
})
