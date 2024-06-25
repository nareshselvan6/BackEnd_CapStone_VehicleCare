import feedback from "../Models/Feedback.js";
import { transporter } from "../Services/nodemailer.js";
import dotenv from "dotenv";

//! create

export const createfeedback=async(req,res)=>{

    try {

        const newfeedback=new feedback(req.body);
        await newfeedback.save();
        res.status(200).json({newfeedback});


    } catch (error) {
        res.status(500).send("error occured while creating feedback" + error);
    }
}


//! get

export const getfeedback=async(req,res)=>{
    try {
        const fetchfeedback=await feedback.find();
        res.status(200).json({fetchfeedback})
        
    } catch (error) {
        res.status(500).send("error occured while getting all feedbacks" + error)
    }
}

//! get by id

export const getfeedbackbyid=async(req,res)=>{
    try {
        const feedbackid=req.params.id;
        const result=await feedback.findOne({_id:feedbackid});
        res.status(200).json({result});

    } catch (error) {
        res.status(500).send("error occured while getting selective feedback")
    
    }
}

//! delete

export const deletefeedback=async(req,res)=>{
    try {
        const removingid=req.params.id;
        const removefeedback=await feedback.findOneAndDelete({_id:removingid});

        res.status(200).send("booking removed successfuly")
        
    } catch (error) {
        res.status(500).send("error occured while removing booking")
        
    }

}


//! afterfeedback remainder
export const afterfeedbackremainder=async (req,res)=>{
    const {customername,email}=req.body;

    const user=email;

    const todaydate=new Date;




//mail send

const info = await transporter.sendMail({
          from: process.env.PASS_EMAIL,
          to: user, 
          subject: "TS Car Care Thanks Mail", 
          text: 
        `          MR."${customername}" 
          Thanks  for the Feedback and trusting our TS Car Care , 
          We hope we Did a our job great, 
          your payment and feedback date is ${todaydate} , 
          Your Next service date has send through mail for your reference,
           ` 
        
        });

      
        res.status(200).send("mail send successfully")

}

// //! serviceremainder

// export const serviceremainder=async (req,res)=>{


// }

// Email configuration
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.PASSWORD
//     }
// });

// Function to send email
