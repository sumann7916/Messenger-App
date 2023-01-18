//Import packages
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();


dotenv.config(); 

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}, ()=> {
    console.log("Database is Connected");
} );

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.listen(8000, ()=>{
    console.log("Server is Running");
})