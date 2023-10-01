import { Router } from "express";
import { saveUser } from "../controller/usercontroller.js";

const router=new Router;
router.route("/register").post(saveUser);
//router.route("/login").post(loginUser);
export default router;