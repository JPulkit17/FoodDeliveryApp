const express = require("express");
const Razorpay = require("razorpay");
require("dotenv").config();
const cors = require("cors");
const crypto = require("crypto");
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

app.post('/order',async(req,res)=>{
    
    try {
        const razorpay = new Razorpay({
            key_id:process.env.RAZORPAY_KEY_ID,
            key_secret:process.env.RAZORPAY_SECRET
        });
        const options = req.body;
        const order = await razorpay.orders.create(options);
        
        if(!order){
            return res.status(500).send("ERROR");
        }
        
        res.json(order);  
        
    } catch (error) {
        console.log(error);
        res.status(500).send("ERROR");
    }
    
})


app.post("/order/validate",(req,res)=>{
    const {razorpay_order_id,razorpay_payment_id,razorpay_signature} = req.body;

    const hmac = crypto.createHmac("sha256",process.env.RAZORPAY_SECRET);
    // order_id + "|" + razorpay_payment_id, secret
    hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const digest = hmac.digest("hex");
    if(digest!=razorpay_signature){
       return res.status(400).json({msg:"transaction failed"});
    }
    res.json({
        msg:"Success",
        orderId:razorpay_order_id,
        paymentId:razorpay_payment_id
    })
})




app.listen(PORT,()=>{
    console.log("listening on port",PORT);
})

