import allplans from "../Models/Plans.js";


//! create

export const createplans=async(req,res)=>{
    try {
        const plans=new allplans(req.body);
        await plans.save();
        res.status(200).json({plans})
        
    } catch (error) {
        res.status(500).send("error occured while creating plans" + error)
    }

}

//!  get

export const getplans=async(req,res)=>{
    try {
        const getplans=await allplans.find()
        res.status(200).json({getplans})
    } catch (error) {
        res.status(500).send("error occured while fetching the data" + error)
    }
}

//! get by name

export const getplansbyname=async(req,res)=>{
    try {

        const {plantype}=req.params
        const getplantype=await allplans.findOne({plantype:plantype})

        res.status(200).json({getplantype})
    } catch (error) {
        res.status(500).send("error occured while fetching the data" + error)
    }
}


//! get by price

export const getplansbyprice=async(req,res)=>{
    try {
        
        const {price}=req.params
        const getplanprice=await allplans.findOne({price:price})
        res.status(200).json({getplanprice})
    } catch (error) {
        res.status(500).send("error occured while fetching the data" + error)
    }
}




//! put 

export const updateplans=async(req,res)=>{

    try {
        const planid=req.params.id;
        const updates=req.body;

        const updatedplans=await allplans.findOneAndUpdate({_id:planid},updates,{ new: true});

        if(updatedplans.matchedCount===0){
            res.status(404).send("no price there")
        }

        const result=await allplans.find({_id:planid})

        res.status(200).json({result})
    } catch (error) {
        res.status(500).send("error occured while updating the data" + error)
    }
}

//! delete 

export const deleteplan=async(req,res)=>{
    try {
        const removingid=req.params.id;
        const removeplan=await allplans.findOneAndDelete({_id:removingid});

        res.status(200).send("plans removed successfuly")
        
    } catch (error) {
        res.status(500).send("error occured while removing plans")
        
    }

}