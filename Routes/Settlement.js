import express from 'express';
import { createsettlement, deletesettlement, editsettlement, getsettlement, getsettlementbyid } from '../Controllers/FinalSettlement.js';
import authMiddleware from '../Middleware/MiddlewareAuth.js';



const settlementrouter=express.Router();

settlementrouter.post('/finalsettlement',authMiddleware,createsettlement);
settlementrouter.get('/getsettlement',authMiddleware,getsettlement);
settlementrouter.get('/getsettlementbyid/:id',authMiddleware,getsettlementbyid);
settlementrouter.delete('/deletesettlement/:id',authMiddleware,deletesettlement);
settlementrouter.put('/editsettlement/:id',authMiddleware,editsettlement);


export default settlementrouter;