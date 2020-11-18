'use strict'

const connectDb = require('../db/db')
const Course = require('../models/courses')

;(async function () {
    await connectDb()
})()

module.exports = {
    Query: {
    Courses: async () => {
        const courses =  await Course.find()
        return courses;
    },
    Course: async(root, args) => await Course.findById(args.id) 
    },
}
