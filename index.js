'use strict'

const { makeExecutableSchema } = require('graphql-tools')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')

const app = express()


const port = process.env.PORT || 3000

// definiendo el esquema inicial
const typeDefs = readFileSync(
  join(__dirname, "lib", "schema.graphql"),
  "utf-8"
);

const Schema = makeExecutableSchema({ typeDefs, resolvers })

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
