const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken');
const User = require('../Models/user')
const getDb = require('../util/database').getDb;


router.post('/createUser',[
    // Validation bty expresss Validator
    body('username','Enter a valid name').isLength({ min: 3 }),
    body('email','Enter a valid email').isEmail(),
    body('password','Password should be minimum 5 chararcters').isLength({ min: 5 }),

],async(req,res,next)  =>  {
    let success = false
    const errors = validationResult(req);
    if (!errors.isEmpty()) { 
      return res.status(400).json({success, errors: errors.array() });
    }
     // id email already exists logic
    try {
        const _db = getDb();
        const _user= await _db.collection("users").findOne({email:req.body.email});
    
    if (_user){
        return res.status(400).json({success,error:"Email already exists"})
    }
    
    const salt= await bcrypt.genSalt(10)
    const secPass= await bcrypt.hash(req.body.password,salt)
    const user= await new User(
        req.body.username,
        secPass,
        req.body.email
      );
      _user.save();
      
      /*const data={
        user:{
        id:user.id
        }
      }
      const authToken= jwt.sign(data, JWT_SECRET)
    // res.json(user)
    success=true
    res.json({success,authToken})*/
    /*}  
    catch (error) {
        console.error(error.message)
        res.status(500).send("Check for errors")
}*/
}
catch (error) {
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