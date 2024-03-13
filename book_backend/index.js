import express from 'express';
// import Book from './models/bookmodel.js';
import {PORT} from './config.js';
import mongoose from 'mongoose';
import booksroutes from './routes/booksroutes.js';
import cors from 'cors';


const app = express();

// middleware
app.use(express.json());

app.use(cors());
// app.use(cors(
//     {
//         origin:"http://localhost:3000",
//         methods : ['GET','PUT','DELETE','POST'],
//         allowedHeaders : ['Content-Type'],
//     } 
// ));
app.use('/books', booksroutes);

app.get('/',(req, res) => {
    console.log(req);
    return res.status(234).send('Welcome to MERN stack');
});




mongoose.connect("mongodb://127.0.0.1:27017/booksdb")
    .then(()=>{
        console.log("connected to database");
        app.listen(PORT, () =>{
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error)=>{
        console.log(error);
    });