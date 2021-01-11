const express = require('express');
const router = express.Router();

router.get('/test',(request,response)=>{
    response.send('ello');
})

module.exports = router;