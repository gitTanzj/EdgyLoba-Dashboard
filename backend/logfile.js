const fs = require('fs');

const data = fs.readFileSync('message.txt', 'utf-8')

const logsArr = []

//turns data into an array of objects
let logs = data.toString().replace(/\r\n/g, "\n").split("\n");
logs = logs.map(log => {
    if (log == "") {
        return;
    }
    logsArr.push(JSON.parse(log))
});

module.exports = logsArr