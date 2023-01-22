//Import packages
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

//Importing Routers
const userRoute = require("./routes/user-routes");
const authRoute = require("./routes/auth-routes");
const conversationRoute = require("./routes/conversation-routes");
const messageRoute = require("./routes/message-routes");


dotenv.config(); 

//Connecting to database
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}, ()=> {
    console.log("Database is Connected");
} );

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// Defining Routes 
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);



//Listening at port 8000
app.listen(8000, ()=>{
    console.log("Server is Running");
})