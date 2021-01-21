const path = require('path')
const express=require('express')
const bodyParse=require('body-parser')
const app     = express()

const PORT = process.env.PORT || 4000

app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')))



app.use('/',require('./routes/index'))
app.use('/login',require('./routes/login'))
app.use('/register',require('./routes/register'))
app.use('/category',require('./routes/category'))


app.use('*',(req,res)=>{
    res.send('coming soon')
})

app.listen(PORT,console.log(`listening to port ${PORT}`))
