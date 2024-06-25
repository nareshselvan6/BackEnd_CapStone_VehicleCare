import express from "express";
import { afterfeedbackremainder, createfeedback, deletefeedback, getfeedback, getfeedbackbyid} from "../Controllers/Feedback.js";
import authMiddleware from "../Middleware/MiddlewareAuth.js";


const feedbackrouter=express.Router();

feedbackrouter.post("/createfeedback",authMiddleware,createfeedback);
feedbackrouter.get("/getfeedback",authMiddleware,getfeedback);
feedbackrouter.get("/getfeedbackbyid/:id",authMiddleware,getfeedbackbyid);
feedbackrouter.delete("/deletefeedback/:id",authMiddleware,deletefeedback);
feedbackrouter.put("/afterfeedbackremainder",afterfeedbackremainder);

export default feedbackrouter;