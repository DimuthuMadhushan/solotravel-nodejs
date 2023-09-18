import { Router } from "express";
import { getAll, savePins } from "../controller/pincontroller.js";

const router=Router();

//Create and get pin
router.route("/").post(savePins).get(getAll);

export default router;