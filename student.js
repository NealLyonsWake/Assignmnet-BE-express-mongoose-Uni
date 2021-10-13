const mongoose = require('mongoose')

// create the schema 
const StudentSchema = new mongoose.Schema({
    s_number: {
        type: String,
        required: [true, 'Nothing was entered'],
        trim: [true, 'Must not contain spaces'],
        unique: true,
    },
    s_pin: {
        type: String,
        required: [true, 'Nothing was entered'],
        trim: [true, 'Must not contain spaces'],
        unique: true,
    }
})

// create the model
const Student = mongoose.model('Student', StudentSchema)

const currentStudent = new Student({
    s_number: "Nelly123",
    s_pin: 12345
})

module.exports = currentStudent
