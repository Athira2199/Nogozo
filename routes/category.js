const express = require('express')
const router = express.Router()

router.get('/:name',(req,res)=>{
    res.render('category')
})



module.exports = router
