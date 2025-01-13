//we need an instance of express to use the express router 
const express = require('express')

//controller functions
const {signupUser, loginUser} = require('../controllers/userController')

const router =express.Router()

//login route (this is a post route because we are sending data)
router.post('/login', loginUser)

//signup route
router.post('/signup', signupUser)

module.exports = router