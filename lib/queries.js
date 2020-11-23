const Course = require('../models/courses')
const Student = require('../models/students')

module.exports = {
    Courses: async () => {
        const courses =  await Course.find().populate('people')
        return courses;
    },
    Course: async(root, args) => {
        const course = await Course.findById(args.id).populate('people')
        return course
    },

    Students: async () => {
        const students = await Student.find()
        return students
    },

    Student: async (root, args) => {
        const student = await Student.findById(args.id)
        return student
    }
}