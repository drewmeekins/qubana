// express install
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
// const routes = require('./routes')

//index route
app.get('/', (req, res) => {
    res.send(`Welcome to Qubana on Port: ${port}`)
}) 

// PORT
app.listen(port, () => {
    console.log(`Welcome to Qubana on Port: ${port}`)
})