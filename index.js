import express from 'express'
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import schoolRoutes from './routes/schoolRoutes.js';

const app=express;


//routes

app.use('/',schoolRoutes);


const PORT=process.env.PORT||8000;

app.listen(()=>console.log(`server started at ${port}`));
