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

export async function loginUser(req,res){
    try {
     // find user 
        const user=await User.findOne({username:req.body.username})
        !user && res.status(400).json("Wronng username or password");
     // validate password
        const validPassword=await bcrypt.compare(
            req.body.password,user.password
        );
        !validPassword && res.status(400).json("Wrong user name or password");

     // send res
        res.status(200).json({_id:user._id, username:user.username})
        
    } catch (error) {
        res.status(500).json(error);
    }

}