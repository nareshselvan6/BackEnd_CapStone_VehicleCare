import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import ConnectDB from "./Database/config.js";
import planrouter from "./Routes/Plans.js";
import bookingrouter from "./Routes/Booking.js";
import settlementrouter from "./Routes/Settlement.js";
import loginrouter from "./Routes/Login.js";
import feedbackrouter from "./Routes/Feedback.js";
import paymentrouter from "./Routes/payment.js";



const app= express();

dotenv.config();
app.use(express.json());
app.use(cors());

//DB Connection
ConnectDB()

//Routes
app.use("/plans",planrouter);
app.use("/booking",bookingrouter);
app.use("/settlement",settlementrouter);
app.use("/feedback",feedbackrouter);
app.use("/logincrediential",loginrouter);
app.use("/payment",paymentrouter)

//Connection
app.get('/',(req,res)=>{
    res.status(200).send("api connection done");
})

// PORT Access
app.listen(process.env.PORT,()=>{
    console.log("app running sucessfully");
})
