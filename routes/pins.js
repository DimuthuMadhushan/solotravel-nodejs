import { Router } from "express";
import Pin from "../models/Pin.js";

const router=Router();

//Create a pin
router.post("/",async (req,res)=>{
    const newPin=new Pin({
        username:req.body.username,
        tittle:req.body.tittle,
        desc:req.body.desc,
        rating:req.body.rating,
        latitude:req.body.latitude,
        longitude:req.body.longitude
    });
    try {
        const savedPin=await newPin.save();
        res.status(200).json(savedPin);
    } catch (error) {
        res.status(500).json(error);
    }
});
export default router;