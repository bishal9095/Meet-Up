const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken');
const User = require('../Models/user')
const getDb = require('../util/database').getDb;

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
      res.status(200).json({user:_user,message:"Welcome to Meet_UP"})
    }
    catch(error){
      
      res.status(500).json({message:'Some error occured'});
    }

    
});

// Getting all users
/*
router.get('/allUsers',
async(req,res)=>{
  try{
    const _db = getDb();
    var users = _db.collection('users').find({}).toArray(function (err, result) {
      if (err) {
          res.send(err);
      } else {

          res.send(result);
      }
  })
    res.status(200).json({users});
  }
  catch(error){
    res.status(500).send("Some error ocuured");
    console.log(error)
  }
})
*/
module.exports = router;