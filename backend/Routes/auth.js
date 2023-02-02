
const { body, validationResult } = require('express-validator');
const express=require('express')
const app =express();
const router=express.Router()

const User = require('../models/user');

router.post('/user', async(req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password,
  }).then(user => res.json(user));
});

module.exports=router