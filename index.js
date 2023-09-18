import dotenv from "dotenv";
import express, { json } from "express";
import mongoose from "mongoose";
import pinRouter from "./routes/pins.js"

dotenv.config();
const PORT=process.env.PORT;
const url=process.env.MONGO_URL;
const app=express();
app.use(json());

mongoose
  .connect(url)
  .then(() => {
      console.log("MongoDB Connected");   
  })
  .catch((err) => {
    console.error(err);
  });
app.use("/api/pins",pinRouter);
  app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})