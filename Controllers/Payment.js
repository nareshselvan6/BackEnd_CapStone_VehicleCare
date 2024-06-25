// import Stripe from "stripe";
// import dotenv, { config } from "dotenv";

// dotenv.config();

// const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

// const stripe = new Stripe(stripeSecretKey,{
//     apiVersion:"2024-04-10",
// })

// export const payment=async(req,res)=>{
//     const{vehiclecost}=req.body;
    
//    let lineItems={price_data:{
//     currency:"usd",
//     product_data:{
//         number:"vehiclenumber"
//     },
//     unit_amount:vehiclecost},
//     quantity:1
//    }

//    const session=await stripe.checkout.sessions.create({
//        payment_method_types:["card"],
//        line_items:lineItems,
//        mode:"payment",
//        success_url:"http://127.0.0.1/3000/",
//        cancel_url:"http://127.0.0.1/3000/"
//    })
//    res.json({id:session.id})

// }


import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

const stripe = new Stripe(stripeSecretKey, {
    apiVersion: "2024-04-10",
});

export const payment = async (req, res) => {
    const { vehiclecost } = req.body;
    console.log(vehiclecost);
    
    let lineItems = [{
        price_data: {
            currency: "usd",
            product_data: {
                name: "Vehicle Cost"
            },
            unit_amount: Number(vehiclecost) * 100 // Convert to cents
        },
        quantity: 1
    }];

    console.log(req.Headers);
    console.log(req.headers);

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
           
            success_url: `${req.headers.origin}/stripaymentsuccess`,
            cancel_url: `${req.headers.origin}/stripaymentfailure`
        });
        console.log(session);
        res.json({ id: session.id });
    } catch (error) {
        console.error("Error creating Stripe session:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
