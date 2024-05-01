const express = require('express')
const dbconnect = require('./dbconfing')
const studentRouet = require('./route/student')
const app = express()

dbconnect()

app.use(express.json())

app.use('/student', studentRouet)

app.get('/', (req, res) => {
    res.send({message : "Hello"})
})

app.use('*',(req,res)=>{
    res.send({message:"404 Page not found"})
})


app.listen(3000);