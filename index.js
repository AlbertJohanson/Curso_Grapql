'use strict'

const { graphql, buildSchema } = require('graphql')
const express = require('express')
const { graphqlHTTP  } = require('express-graphql')

const app = express()

const port = process.env.PORT || 3000


// definiendo el esquema inicial
const Schema = buildSchema (`
    type Query {
        hello: String
        saludo: String
    }
`)

//Config Resolvers
const resolvers = {
    hello: () => {
        return 'Hola Mundo'
    },
    saludo: () => {
        return 'Mi nombre es Albert'
    }
}

// Ejecutar el servidor
app.use('/api', graphqlHTTP({
    schema: Schema,
    rootValue: resolvers,
    graphiql: true
    })
)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/api`)
})