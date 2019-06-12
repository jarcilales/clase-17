import express from 'express'
import authRouter from './auth'
const app = express()

//homeHandler es una funcion declarada de un forma especial
const homeHandler = (request, response) => {
    response.send('Hello world')
}

app.all('/',homeHandler)

app.use('/auth', authRouter)
app.listen(9000)