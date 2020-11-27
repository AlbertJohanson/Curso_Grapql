const mongoose = require('mongoose')

const { Schema } = mongoose;

const studentsSchema = new Schema ({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    avatar:{
        data: Buffer, 
        type: String
    },
    phone: {
        type: String,
    }
})

module.exports = mongoose.model('Student', studentsSchema, 'Students');