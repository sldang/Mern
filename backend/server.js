//entry file for the backend application 

//#1 require the express package
const express = require('express')

//create variable to connect to the databse
const mongoose = require('mongoose')

//#2 start up express app
const app = express()

const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

require('dotenv').config()

//middleware
app.use(express.json())

app.use((req,res,next) =>{
    console.log(req.path, req.method)
    next()
})

//react to requests (routes)
//when we fire a request to the route in the '' then we use the workoutRoutes
//we are registering the routes here in the server.js file 
app.use('/api/workouts', workoutRoutes)

app.use('/api/user', userRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
    //#3 listen for requests or port number 
    app.listen(process.env.PORT, () =>{
    console.log('listening on port 4000')
})
    })
    .catch((error) => {
        console.log(error)
    })
