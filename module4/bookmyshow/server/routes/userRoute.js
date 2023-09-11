const router = require('express').Router();
const User = require('../models/userModel');

router.post('/register',async(req,res)=>{
    try{
        const userExists = await User.findOne({email:req.body.email});
        if(userExists){
            return res.send({
                success:false,
                message:"user already exists"
            })
        }

        const newUser = await User(req.body);
        console.log(newUser);
        await newUser.save();
        res.send({
            success:true,
            message:"User Registered, please Login"
        })

    }catch(err){
        console.log(err);
    }
    
})

module.exports = router;