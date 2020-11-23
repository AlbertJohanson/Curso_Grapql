'use strict'

const connectDb = require('../db/db')
const queries = require('./queries')
const mutations = require('./mutations');


;(async function () {
    await connectDb()
})()

module.exports = {
    Query: queries,
    Mutation: mutations
}
