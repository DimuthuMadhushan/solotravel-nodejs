import User from"../models/User.js";
import bcrypt from "bcrypt"
export async function saveUser(req,res){

    try {
        //create bcrypt passord
        const salt=await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(req.body.password,salt)
        //create user
        const newUser=new User({
            username:req.body.username,
            email:req.body.email,
            password:hashpassword
        });
        //Save user
        const savedUser=newUser.save();
        res.status(200).json((await savedUser)._id);
    } catch (error) {
        res.status(500).json(error);
    }
}