const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    googleId:String,
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    profilePicture:{
        type: String,
        default: "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?w=2000",
    }
},{timestamps:true});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;