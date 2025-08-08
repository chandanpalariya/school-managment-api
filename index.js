import express from 'express'
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import schoolRoutes from './routes/schoolRoutes.js';


dotenv.config();


const app=express();


//connection




//middleware
app.use(express.json());
app.use(bodyParser.json());


//routes

app.use('/',schoolRoutes);


const PORT=process.env.PORT||8000;
console.log(PORT)

app.listen(()=>console.log(`server started at ${PORT}`));
