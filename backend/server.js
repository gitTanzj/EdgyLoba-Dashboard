require('dotenv').config();

const { getLogs } = require('./components/logs');
const express = require('express');
const app = express();

// next method
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//data get request
app.get('/api/logs',async (req, res) => {
    // const logs = await getLogs(50); // For filtering add another argument to getLogs example: getLogs(50, { "meta.command": "me", "meta.responseTime": 1742 })
    res.status(200);
})

//app start
app.listen(process.env.PORT, () => {
    console.log("it works")
})
