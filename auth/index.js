//Tengo que importar express
const express = require('express')
const AuthRouter = express.Router()


const authHandler = (request, response) => {
    response.send(`Ruta auth ${request.path}`)
}

AuthRouter.all('/', authHandler)

AuthRouter.all('/login', authHandler)

AuthRouter.all('/logout', authHandler)

AuthRouter.all('/recovery', authHandler)
//necesito exportar el modulo completo para que express me pueda
//utilizar
module.exports = AuthRouter