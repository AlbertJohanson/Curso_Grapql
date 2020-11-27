const Course = require('../models/courses')
const Student = require('../models/students')

const errorHandler = require('./errorHandler')

module.exports = {
    createCourse: async(root, {input}) => {
        const newCourse = await Course.create(input)
        return newCourse
    },
    updateCourse: async(root,{_id, input}) => {
        const UCourse = await Course.findOneAndUpdate({_id: _id}, {$set: input}, {new: true})
        return UCourse
    },
    deleteCourse: async(root, {_id}) => {
        const DCourse = await Course.findByIdAndRemove({_id: _id})
        if(!DCourse) {
            throw new Error('error')
        }
        return DCourse
    },

    createPerson: async(root, {input}) => {
        try {
            const newStudent = await Student.create(input)
            return newStudent
        } catch (e) {
            errorHandler(e)
        }
    },

    updatePerson: async(root,{_id, input}) => {
        

       const uStudent = await Student.findOneAndUpdate({_id: _id}, {$set: input}, {new: true})
       return uStudent
    },

    deleteStudent: async(root, {_id}) => {
        const DStudent = await Student.findByIdAndRemove({_id: _id})
        if(!DStudent) {
            throw new Error('error')
        }
        return DStudent
    },

    People: async (root, {courseID, personID }) => {

        const APeople = await Course.findByIdAndUpdate(courseID, {$push: { people: personID }})
        return APeople
    }
}