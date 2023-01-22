const express = require("express");

const router = express.Router();
const User = require("../model/User");
const bcrypt = require("bcrypt");




//REGISTER USER
router.post("/register", async(req, res)=> {
    try {
        //Hashing password 
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(req.body.password, salt);
        
        //Creating User object
        const newUser = new User({
            username : req.body.username,
            email : req.body.email,
            password: hashedpassword,
        });

        //Saving user and returning response
        const user = await newUser.save();
        res.status(200).json(user);
        
    } catch (error) {
        res.status(500).json(error);
    }
});


//LOGIN USER
router.post("/login", async(req, res)=> {
    try {
        const user = await User.findOne({email: req.body.email});
        !user && res.status(404).json({message:"Email or password Incorrect"});  

        const validPassword = await bcrypt.compare(req.body.password, user.password); //return True or False
        !validPassword && res.status(400).json({message: "Email or Password Incorrect"});

        res.status(200).json(user);


        
    } catch (error) {
        res.status(500).json(error);
    }


})

module.exports = router;