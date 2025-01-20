// ES Module
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from "cookie-parser";
import { connectDB } from './config/db.js';
import apiRouter from './routes/index.js';
import cors from 'cors';



// const myLogger = function(req,res,next){
//         console.log("LOGGED");

//         const userAuth = false;

//         if(!userAuth){
//             return res.status(400).json('user is not authenticated')
//         }
//         next();
// };

// // Application middleware ( Middleware writtern in index.js will be applicable to the whole application)
// app.use(myLogger);

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:true,
    Credentials:true
}))

const port = 3000;

connectDB();


app.get("/", (req,res)=>{
    res.send("Hello World!");
});

app.get('/test', (req, res) => {
  res.send('Test!')
})


app.use("/api", apiRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});