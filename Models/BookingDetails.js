import mongoose from "mongoose";


const details=mongoose.Schema({
    customername:String,
    dateofbooking:String,
    phonenumber:String,
    email:String,
    address:String,
    city:String,
    vehiclebrand:String,
    vehiclenumber:String,
    vehiclename:String,
    appointmentdateandtime:String,
    planid:{ type: mongoose.Schema.Types.ObjectId, ref: 'Objectid' },
    // planid:String
})

const bookingdetails=mongoose.model("bookingdetails",details);
export default bookingdetails;