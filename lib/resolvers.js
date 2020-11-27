'use strict'

const connectDb = require('../db/db')
const queries = require('./queries')
const mutations = require('./mutations');


;(async function () {
    await connectDb()
})()

module.exports = {
    Query: queries,
    Mutation: mutations,
    Person: {
        __resolveType: (person, context, info) => {
            if (person.phone) {
                return 'Monitor'
            } 
                return 'Student'
            
        }
    },
    GlobalSearch: {
        __resolveType: (item, context, info) => {
            if(item.title){
                return 'Course'
            }

            if(item.phone) {
                return 'Monitor'
            }
            return 'Student'
        }
    }
}
