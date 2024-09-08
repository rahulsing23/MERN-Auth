import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password :{
        type: String,
        required: true,

    },
    profilePicture :{
        type: String,
        default: "https://cdn-icons-png.freepik.com/256/9970/9970508.png?semt=ais_hybrid"
    }
},{timestamps:true})

const User = mongoose.model('User', userSchema)

export default User
