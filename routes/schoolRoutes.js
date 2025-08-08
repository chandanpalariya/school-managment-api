import express from "express";
import { addSchool,listSchools } from "../controlers/schoolControlers.js";

const router = express.Router();

// add school
router.post("/addSchool", addSchool);

// list school
router.get("/listSchools", listSchools);

export default router;
