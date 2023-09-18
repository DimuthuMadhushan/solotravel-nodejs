import mongoose, { Schema } from "mongoose";

const pinSchema=new Schema({
    username:{
        type:String,
        require:true,
    },
    tittle:{
        type:String,
        require:true,
        min:3
    },
    
    desc:{
        type:String,
        require:true,
        min:3
    },
    rating:{
        type:String,
        require:true,
        min:3,
        max:5
    },
    latitude:{
        type:Number,
        require:true
    },
    longitude:{
        type:Number,
        require:true
    }
},
{ timestamps:true }
);
module.exports=mongoose.model("Pin" ,pinSchema);