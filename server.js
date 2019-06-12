const express = require('express')
const app = express()
const authRouter = require('./auth')
//homeHandler es una funcion declarada de un forma especial
const homeHandler = (request, response) => {
    response.send('Hello world')
}

app.all('/',homeHandler)

app.use('/auth', authRouter)
app.listen(9000)