import express from'express';
import { createplans, deleteplan, getplans, getplansbyname, getplansbyprice, updateplans } from '../Controllers/Plans.js';
import authMiddleware from '../Middleware/MiddlewareAuth.js';


const planrouter= express.Router();

planrouter.post("/createplan",authMiddleware,createplans);
planrouter.get("/getplans",authMiddleware,getplans);
planrouter.get("/getplansbyname/:plantype",authMiddleware,getplansbyname);
planrouter.get("/getplansbyprice/:price",authMiddleware,getplansbyprice);
planrouter.put("/updateplan/:id",authMiddleware,updateplans);
planrouter.delete("/deleteplan/:id",authMiddleware,deleteplan);



export default planrouter;