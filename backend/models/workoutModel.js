const mongoose = require('mongoose')
const Schema = mongoose.Schema
//schema defines structure
const workoutSchema = Schema({
    title: {
        type: String,
        required: true
    },
    load:{
        type: Number,
        required: true
    },
    reps: {
        type: Number,
        required: true 
    }
},{ timestamps: true })

//model
module.exports = mongoose.model('Workout',workoutSchema);


