// modules
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
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

app.use('/api/user', userRoutes);
