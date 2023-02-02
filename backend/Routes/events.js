const express=require('express');
const router= express.Router();


router.get('/events',()=>{
    console.log('Backend Connected');
})
module.exports=router;
