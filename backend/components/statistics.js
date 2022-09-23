const { MongoClient } = require("mongodb");
require('dotenv').config();

const DBClient = new MongoClient(process.env.MONGO_CONNECTION);

const statistics = async () => {
      try {
            await DBClient.connect();

            const userCount = await DBClient.db("EdgyLoba").collection("users").countDocuments();
            const logsCount = await DBClient.db("EdgyLoba").collection("logs").countDocuments();
            const historyCount = await DBClient.db("EdgyLoba").collection("history").countDocuments();
            const serverCount = await DBClient.db("EdgyLoba").collection("guilds").countDocuments();

            return {
                  counts: {
                        userCount: userCount,
                        logsCount: logsCount,
                        historyCount: historyCount,
                        serverCount: serverCount
                  }
            }
      } catch (error) {
            console.log(error);
      } finally {
            await DBClient.close();
      }
}

module.exports = statistics;