const Course = require('../models/courses')
const Student = require('../models/students')

module.exports = {
    Courses: async () => {
        const courses =  await Course.find().populate('people')
        return courses;
    },
    Course: async(root, {_id}) => {
        const course = await Course.findById({_id: _id}).populate('people')
        return course
    },

    Students: async () => {
        const students = await Student.find()
        return students
    },

    Student: async (root, {_id}) => {
        const student = await Student.findById({_id: _id})
        return student
    }
}