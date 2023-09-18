import mongoose, { Schema } from "mongoose";

const userSchema=new Schema({
    username:{
        type:String,
        require:true,
        min:3,
        max:12,
        unique:true
    },
    email:{
        type:String,
        require:true,
        max:50,
        unique:true
    },
    password:{
        type:String,
        require:true,
        min:6
    }
},
{ timestamps:true }
);
const User=mongoose.model("User",userSchema);
export default User;