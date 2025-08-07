import express from 'express'

const app=express;


const PORT=process.env||8000;

app.listen(()=>console.log(`server started at ${port}`));
