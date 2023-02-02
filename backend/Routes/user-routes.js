const express = require('express');
const router = express.Router();

router.get('/user',(req,res,next) => {
    console.log('GET request for user');
    res.json({"message": "/user ....It works"});
});

router.post('/signup',(req,res,next) => {
    console.log('POST request for signup');
    res.json({"message": "It works"});
});

module.exports = router;