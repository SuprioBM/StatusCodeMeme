const express = require("express")
const app = express();
const cors = require('cors');
const meme = require("./models/Meme.model");
const mongoose = require("mongoose");
const memeRoutes = require("./routes/MemeAPI")
const db = require("./DB/dbConnect");


//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());


//ROUTES
app.use('/memes',memeRoutes)



//Server
app.listen(process.env.PORT,() =>{
    console.log(`server is running on port ${process.env.PORT}`)
});


