const express = require('express');
const router = express.Router();

router.get('/user/events/:eid',(req,res,next) => {
    console.log('GET request for events');
    res.json({"message": "/user/events ....It works"});
});

router.get('/events',(req,res,next) => {
    console.log('GET request for events');
    res.json({"message": "It works"});
});

module.exports = router;
