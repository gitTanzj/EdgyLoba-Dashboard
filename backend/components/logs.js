const { MongoClient } = require("mongodb");
require('dotenv').config();

const DBClient = new MongoClient(process.env.MONGO_CONNECTION);

const logsCollection = DBClient.db("EdgyLoba").collection("logs");

async function getLogs(limit, filter) {
    try {
        await DBClient.connect();

        let logs;

        if (filter != undefined) {
            logs = await logsCollection.find(filter).limit(limit).toArray();
        } else {
            logs = await logsCollection.find({}).limit(limit).toArray();
        }
        
        return logs;
    } catch (error) {
        console.log(error);
    } finally {
        await DBClient.close();
    }
}

module.exports = {getLogs};