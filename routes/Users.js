import { Router } from "express";
import { saveUser } from "../controller/usercontroller.js";

const router=new Router;
router.route("/register").post(saveUser);
//router.route("/login").post(login);
export default router;