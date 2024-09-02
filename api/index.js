// modules
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

// initialize
dotenv.config()
const app = express()

// database connection
mongoose.connect(process.env.MONGO).then(res =>{
    console.log("Mongo db is connected")
}).catch(err =>{
    console.log(err.message)
})


//routes
app.listen(process.env.PORT, ()=>{
    console.log('Server is listening on port', process.env.PORT)
})