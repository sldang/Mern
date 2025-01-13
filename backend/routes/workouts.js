const express = require('express')

const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

//requireAuth for all workouts routes
router.use(requireAuth)

//this is to get all workouts
router.get('/', getWorkouts)

//GET a single workout 
router.get('/:id', getWorkout)

//POST a new workout
router.post('/', createWorkout) 

//DELETE a workout 
router.delete('/:id', deleteWorkout) 

//update a workout
router.patch('/:id', updateWorkout)
 
module.exports = router