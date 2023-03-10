const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type: String, 
        required: true,
        min: 6 

    },
    profilePicture : {
        type : String,
        default: ""
    },
    isAdmin : {
        type : Boolean,
        default: false,
    },
    desc : {
        type : String,
        max: 50, 
    }
});
module.exports = mongoose.model("User", UserSchema); 