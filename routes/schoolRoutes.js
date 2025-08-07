

import express from 'express';



const router = express.Router();

// add school
router.post('/addSchool', addSchool);

// list school
router.get('/listSchools', listSchools);

export default router;
