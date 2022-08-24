require('dotenv').config();

const data = require('./logfile');
const express = require('express');
const app = express();

// next method
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//data get request
app.get('/api/logs',(req, res) => {
    res.send(data)
})

//app start
app.listen(process.env.PORT, () => {
    console.log("it works")
})
