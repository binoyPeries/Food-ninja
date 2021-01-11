const express = require('express');
const router = express.Router();

router.get('/test',(request,response)=>{
    console.log("sj");
    response.send('ello');
})

module.exports = router;