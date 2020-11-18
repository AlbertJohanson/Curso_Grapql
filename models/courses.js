const mongoose = require('mongoose')

const { Schema } = mongoose;

const coursesSchema = new Schema ({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String
    },
    teacher: {
        type: String
    },
    description: {
        type: String
    },
    topic: {
        type: String
    }
})

module.exports = mongoose.model('Course', coursesSchema, 'Cursos');

