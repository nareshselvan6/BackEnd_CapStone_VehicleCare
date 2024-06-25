import express from "express";
// import authMiddleware from "../Middleware/MiddlewareAuth.js";
import { payment } from "../Controllers/Payment.js";

const paymentrouter=express.Router();

paymentrouter.post("/stripepayment",payment)


export default paymentrouter