const mongoose = require('mongoose')

const Schema = mongoose.Schema

//schema defines the structure of the document
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
}, {timestamps: true })

//apply the schema to the model
module.exports = mongoose.model('Workout', workoutSchema)

