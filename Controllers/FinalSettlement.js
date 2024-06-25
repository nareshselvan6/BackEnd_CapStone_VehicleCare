import finalsettlement from "../Models/FinalSettlement.js";



//! create

export const createsettlement=async(req,res)=>{
    try {
        const settlement=new finalsettlement(req.body);
        await settlement.save();
        res.status(200).json({settlement});
        
    } catch (error) {
        res.status(500).send("error occured while creating settlement");
    }
}

//! get all

export const getsettlement=async(req,res)=>{
    try {
        const getsettlement=await finalsettlement.find();
        res.status(200).json({getsettlement});
        
    } catch (error) {
        res.status(500).send(" error occured while fetching settlement " + error);
    }
}

//! get by id

export const getsettlementbyid=async(req,res)=>{
    try {
        const settlementid=req.params.id;
        const settlementbyid=await finalsettlement.findOne({_id:settlementid});
        res.status(200).json({settlementbyid});
    } catch (error) {
        res.status(500).send(" error occured while fetching selective settlement " + error);
    }
}

//! delete 

export const deletesettlement=async(req,res)=>{
    try {
        const settlementid=req.params.id;
        const removesettlement=await finalsettlement.findOneAndDelete({_id:settlementid});
        res.status(200).json({removesettlement});
    } catch (error) {
        res.status(500).send(" error occured while removing selective settlement " + error);
    }
}

//! edit 

export const editsettlement=async(req,res)=>{

    try {
        const editid=req.params.id;
        const updatedvalues=req.body;
        const updatingsettlement=await finalsettlement.findOneAndUpdate({_id:editid},updatedvalues);

        const updatedsettlement=await finalsettlement.findOne({_id:editid});
        res.status(200).json({updatedsettlement});
        
    } catch (error) {
        res.status(500).send(" error occured while updating selective settlement " + error);
    }

}