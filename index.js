import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();
const PORT=process.env.PORT;
const url=process.env.MONGO_URL;
const app=express();



mongoose
  .connect(url)
  .then(() => {
      console.log("MongoDB Connected");   
  })
  .catch((err) => {
    console.error(err);
  });

  app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})