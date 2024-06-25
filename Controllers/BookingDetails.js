import bookingdetails from "../Models/BookingDetails.js";
import allplans from "../Models/Plans.js";

//! create

export const newbooking=async(req,res)=>{
    try {
        const createbooking= new bookingdetails(req.body);
        await createbooking.save();
        res.status(200).json({createbooking})
        
    } catch (error) {
        res.status(500).send("error occured while creating new booking")
    }
}

//! get

export const getallbookings=async(req,res)=>{
    try {
        const getbookings=await bookingdetails.find();
        res.status(200).json({getbookings})
        
    } catch (error) {
        res.status(500).send("error occured while getting all booking")
    }
}

//! get by id

export const getbookingsbyvnobdt=async(req,res)=>{
    try {
        const details=req.params;
        const {vehicleno,bookeddate}=details
        const result=await bookingdetails.find({$and:[{vehiclenumber:vehicleno},{dateofbooking:bookeddate}]});


        for(let i=0;i<result.length;i++){
    
            let plan = await allplans.findById( result[i].planid)
              result[i]={...result[i]._doc,planid: plan}
  
         }


        res.status(200).json({result});

    } catch (error) {
        res.status(500).send("error occured while getting selective booking")
    }
}

//! get by vehiclenumber

export const getbookingbyVNO=async(req,res)=>{
    try {
        const {CVNumber}=req.params;
        const result=await bookingdetails.find({vehiclenumber:String(CVNumber)});

        for(let i=0;i<result.length;i++){
    
             let plan = await allplans.findById( result[i].planid)
               result[i]={...result[i]._doc,planid: plan}
   
          }
        
       
        if(result==0){
            res.status(404).json("no vehicle number matched")
        }
        res.status(200).json({result})
    } catch (error) {
        res.status(500).send("error occured while getting selective booking by vehiclenumber")
    }
}



//! edit

export const editbooking=async(req,res)=>{
    try {
        const editid=req.params.id;
        const content=req.body;
        const updatebooking=await bookingdetails.findOneAndUpdate({_id:editid},content);
        res.status(200).json({updatebooking})

    } catch (error) {
        res.status(500).send("error occured while updating selective booking" + error)
    }
}

//! delete

export const deletebooking=async(req,res)=>{
    try {
        const removingid=req.params.id;
        const removebooking=await bookingdetails.findOneAndDelete({_id:removingid});

        res.status(200).send("booking removed successfuly")
        
    } catch (error) {
        res.status(500).send("error occured while removing booking")
        
    }

}