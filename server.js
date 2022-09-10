
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World! Hoang Huy dep trai')
})
app.get('/Tuyen', (req, res) => {
    res.send('Con cho Tuyen')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})