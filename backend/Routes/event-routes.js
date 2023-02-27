const express = require('express');
const router = express.Router();
const {body,ValidationResult}=require('express-validator');
const getDb = require('../util/database').getDb;
// Route to fetch event of a specific user.
router.get('/user/events/:eid',(req,res,next) => {
    console.log('GET request for events');
    res.json({"message": "/user/events ....It works"});
});

// Create event 
router.get('/createEvents',[
    body('EventName','Enter a event name').isLength({min:5}),
    body('Description','Enter a description').isLength({min:10}),
    body('Location','Enter a location').isLength({min:5})
],(req,res,next) => {

    res.json({"message": "It works"});
});

module.exports = router;
