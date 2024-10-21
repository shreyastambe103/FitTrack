//backend/routes/workouts.js
const express = require('express')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
}= require('../controllers/workoutController.js')
const router = express.Router()

//GET all workouts
router.get('/',getWorkouts)


//GET single workout
router.get ('/:id',getWorkout)

//POST a new workout
router.post('/', createWorkout)


//DELETE a  workout
router.delete('/:id',deleteWorkout)

//UPDATE a new workout
router.patch('/:id',updateWorkout)
module.exports = router