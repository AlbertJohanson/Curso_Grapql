const mongoose = require('mongoose')

const { Schema } = mongoose;

const studentsSchema = new Schema ({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
})

module.exports = mongoose.model('Student', studentsSchema, 'Students');