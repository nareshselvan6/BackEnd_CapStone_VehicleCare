import mongoose from "mongoose";

const logindetails=mongoose.Schema({
    username:String,
    email:String,
    password:String,
    resettoken:String

})
const logincrediential=mongoose.model('logincrediential',logindetails);
export default logincrediential;