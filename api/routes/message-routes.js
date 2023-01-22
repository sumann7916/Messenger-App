const express = require("express");

const router = express.Router();
const Message = require("../model/Message");


//new message
router.post("/", async (req, res)=> {
    const newMessage = new Message(req.body);

    try {
        savedMessage = await newMessage.save();
        res.status(200).json(savedMessage);
    } catch (error) {
        res.status(500).json(error);
    }
});

//get messages
router.get("/:conversationId", async(req, res)=> {

    try {
        const messages =await Message.find({conversationId: req.params.conversationId});
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json(error);
    }  
});


module.exports = router;