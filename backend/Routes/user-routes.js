const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken');
const Users=require('../Models/user')


router.post('/createUser',[
    // Validation bty expresss Validator
    body('name','Enter a valid name').isLength({ min: 3 }),
    body('email','Enter a valid email').isEmail(),
    body('password','Password should be minimum 5 chararcters').isLength({ min: 5 }),

],async(req,res)=>{
    let success=false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
    try {
        
    
    let user= await Users.findOne({email:req.body.email})
    
    if (user){
        return res.status(400).json({success,error:"Email already exists"})
    }
    const salt= await bcrypt.genSalt(10)
    const secPass= await bcrypt.hash(req.body.password,salt)
    user= await Users.create({
        name: req.body.name,
        password: secPass,
        email:req.body.email
      })
      const data={
        user:{
        id:user.id
        }
      }
      const authToken= jwt.sign(data, JWT_SECRET)
    // res.json(user)
    success=true
    res.json({success,authToken})
} catch (error) {
        console.error(error.message)
        res.status(500).send("Check for errors")
}});



router.get('/user',(req,res,next) => {
    console.log('GET request for user');
    res.json({"message": "/user ....It works"});
});

router.post('/signup',(req,res,next) => {
    console.log('POST request for signup');
    res.json({"message": "It works"});
});


module.exports = router;