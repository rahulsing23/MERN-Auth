// modules
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'
// initialize
dotenv.config()
const app = express()

// database connection
mongoose.connect(process.env.MONGO).then(() =>{
    console.log("Mongo db is connected")
}).catch(err =>{
    console.log(err)
})


//routes
app.listen(process.env.PORT, ()=>{
    console.log('Server is listening on port', process.env.PORT)
})

app.use(express.json())

// test api
app.use('/api/user', userRoute);

// signup api
app.use('/api/auth', authRoute);

// middleware 
app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error'

    return res.status(statusCode).json({
        success: false,
        statusCode: statusCode,
        message: message
    })
})