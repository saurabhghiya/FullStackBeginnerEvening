const router = require('express').Router();
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

// route to register new user
router.post('/register',async(req,res)=>{
    try{
        const userExists = await User.findOne({email:req.body.email});
        if(userExists){
            return res.send({
                success:false,
                message:"user already exists"
            })
        }

        // using bcrypt to hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt);
        req.body.password = hashedPassword;

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
    
});

// route to login - check for user details and login
router.post('/login', async (req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email:email})
    if(!user){
        return res.send({
            success:false,
            message: "User does not exist"
        });
    }

    const validPassword = await bcrypt.compare(password,user.password);

    if(!validPassword){
        return res.send({
            success: false,
            message: "Invalid Password"
        });
    }

    res.send({
        success:true,
        message:"User Logged In",
        greet:`Hello ${user.name}`
        
    });
});

module.exports = router;