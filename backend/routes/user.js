const express = require("express");
const zod = require("zod");
const {pusers, accounts} = require("../db.js");
const router  = express.Router()

var signupBody = zod.object({username:zod.string().email(),
firstName:zod.string(), lastName: zod.string(), password:zod.string().min(8)
})

router.post('/signup', async (req,res)=>{
   var {success} = signupBody.safeParse(req.body)
   if(success){
    var existingUser = await pusers.findOne({userName:req.body})
    if(existingUser){
        res.status(411).json({
            message: "Email already taken"
        });
        return;
    
    }

    var user = await pusers.create(req.body)
    var account = await accounts.create({userId:user._id, 
        balance: 1 + Math.random() * 10000})

   }
});