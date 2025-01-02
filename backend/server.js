//entry file for the backend application 

//#1 require the express package
const express = require('express')

//#2 start up express app
const app = express()

const workoutRoutes = require('./routes/workouts')

require('dotenv').config()

//middleware
app.use(express.json())

app.use((req,res,next) =>{
    console.log(req.path, req.method)
    next()
})

//react to requests (routes)
//when we fire a request to the route in the '' then we use the workoutRoutes
app.use('/api/workouts', workoutRoutes)

//#3 listen for requests or port number 
app.listen(process.env.PORT, () =>{
    console.log('listening on port 4000')
})