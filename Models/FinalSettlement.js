import mongoose from "mongoose";


const settlement=mongoose.Schema({
    bookingid:String,
    finalprice:String,
    deliverystatus:String,
    deliverydate:String
})

const finalsettlement=mongoose.model("finalsettlement",settlement)
export default finalsettlement;