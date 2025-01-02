const express = require('express')

const router = express.Router()

//this is to get all workouts
router.get('/', (req,res) => {
    res.json({mssg: 'GET all workouts'})
})

//GET a single workout 
router.get('/:id', (req,res) => {
    res.json({mssg: 'GET a single workout'})
})

//POST a new workout
router.post('/', (req,res) => {
    res.json({mssg: 'POST a new workouts'})
}) 

//DELETE a workout 
router.delete('/:id', (req,res) => {
    res.json({mssg: 'DELETE a  workout'})
}) 

//update a workout
router.patch('/:id', (req,res) => {
    res.json({mssg: 'update a workout'})
}) 
module.exports = router