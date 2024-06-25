import express from "express";
import { deletebooking, editbooking, getallbookings, getbookingbyVNO, getbookingsbyvnobdt, newbooking } from "../Controllers/BookingDetails.js";
import authMiddleware from "../Middleware/MiddlewareAuth.js";



const bookingrouter=express.Router();

bookingrouter.post('/createbooking',authMiddleware,newbooking);
bookingrouter.get('/allbookings',authMiddleware,getallbookings);
bookingrouter.get("/getbooking/:vehicleno/:bookeddate",authMiddleware,getbookingsbyvnobdt);
bookingrouter.get("/getbyvehiclenumber/:CVNumber",authMiddleware,getbookingbyVNO);
// bookingrouter.get("/getbyvehiclenumber/:CVNumber/:date",getbookingbyVNOnddate);
bookingrouter.put("/editbooking/:id",authMiddleware,editbooking);
bookingrouter.delete("/deletebooking/:id",authMiddleware,deletebooking);

export default bookingrouter;

