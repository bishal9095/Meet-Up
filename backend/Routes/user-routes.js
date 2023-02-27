const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken');
const User = require('../Models/user')
const getDb = require('../util/database').getDb;
const JWT_SECRET='This is the next big thing'

// creating user for signup 
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
        const _user = await _db.collection("users").findOne({email:req.body.email});
    
    if (_user){
        return res.status(400).json({success,error:"Email already exists"})
    }
    
    const salt = await bcrypt.genSalt(10)
    const secPass = await bcrypt.hash(req.body.password,salt)
    const user=  new User(
        req.body.username,
        secPass,
        req.body.email
      );
      user.save();

      const data={
        user:{
        email:user.email
        }
      }
      const authToken= jwt.sign(data, JWT_SECRET)
    // res.json(user)
    success=true
    res.json({success,authToken})
      
    

}
catch (error) {
  console.error(error.message)
  res.status(500).send("Check for errors")
}});

//login user route
router.post('/loginUser',[
    body('email','Enter a valid email').isEmail(),
    body('password','Enter a valid password').isLength({min:5})
],async (req,res,next) => {
    try {
      const error = validationResult(req);
      if (!error.isEmpty()){
        return res.status(400).json({error:error,message:'Bad Request'});
      }
      const _db = getDb();
      const {email,password} = req.body;
      const _user = await _db.collection('users').findOne({email});
      // console.log(_user);
      if (!_user){
        return res.status(400).json({message:'Please login with valid credentials.'});
      }
      const bool = await bcrypt.compare(password,_user.password);
      if (!bool){
        return res.status(400).json({message:'Please login with valid credentials'});
      }
      res.status(200).json({user:_user,message:"Welcome to Meet_UP"});
      const data={
        user:{
        email:user.email
        }
      }
      const authToken= jwt.sign(data, JWT_SECRET)
    // res.json(user)
    success=true
    res.json({success,authToken})
    }
    catch(error){
      
      res.status(500).json({message:'Some error occured'});
    }

    
});

// Getting all users data from database
router.get('/allUsers',
async(req,res)=>{
  
  try{
    const _db = getDb();
    var users = await _db.collection('users').find({},{projection:{password:0,_id:0}}).toArray();
    console.log(users)
    return res.status(200).json({users});
  }
  catch(error){
    return res.status(500).send("Some error ocurred");
    // console.log(error)
  }
})

//Getting user details by id/email from database
router.get('/UserDetails',async (req,res)=>{

  try{
    const _db = getDb();
    var users = await _db.collection('users').findOne({});
    console.log(users);
    return res.status(200).json({users});

  }
  catch(error){
    return res.status(400).send(" Please login using correct credentials.")
  }
})
module.exports = router;