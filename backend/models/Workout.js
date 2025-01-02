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
    }
}, {timestamps: true })

//apply the schema to the model
module.export = mongoose.model('Workout')