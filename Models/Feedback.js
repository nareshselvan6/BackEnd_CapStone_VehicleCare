import mongoose from "mongoose";

const feedbackdetails=mongoose.Schema({
    customername:String,
    email:String,
    tipstoimprove:String,
    workSatisfaction:String
})

const feedback=mongoose.model("feedback",feedbackdetails);
export default feedback;
