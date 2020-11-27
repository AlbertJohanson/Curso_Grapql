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

    People: async () => {
        const students = await Student.find()
        return students
    },

    Person: async (root, {_id}) => {
        const student = await Student.findById({_id: _id})
        return student
    },
    searchItems: async (root, {keyword}) => {
       
        const [course, student] = await Promise.all([
            Course.find({
                $text: {
                  $search: keyword
                }
              }),
            Student.find({
                $text: {
                  $search: keyword
                }
              })
        ])

        return [...course, ...student]
    }
}