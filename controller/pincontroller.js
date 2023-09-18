
import Pin from "../models/Pin.js";

export async function savePins(req,res){
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
};
export async function getAll(req,res){
    try {
        const pins= await Pin.find();
        res.status(200).json(pins);        
    } catch (error) {
        res.status(500).json(error);
    }
    }