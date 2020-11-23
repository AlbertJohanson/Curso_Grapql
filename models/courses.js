const mongoose = require('mongoose')

const { Schema } = mongoose;

const coursesSchema = new Schema ({
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
    },
    people: [{type: Schema.Types.ObjectId, ref: 'Student'}],
})

module.exports = mongoose.model('Course', coursesSchema, 'Cursos');

