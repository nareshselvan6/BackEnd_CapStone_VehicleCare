import mongoose from "mongoose";

const plans=mongoose.Schema({
    plantype:String,
    package:String,
    price:String,
    works:String,
    labourcost:String,
    materialcost:String,
    servicetax:String,
    totalcost:String

})
const allplans=mongoose.model("allplans",plans);

export default allplans;