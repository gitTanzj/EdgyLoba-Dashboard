const { MongoClient } = require("mongodb");
const { Api } = require("@top-gg/sdk");
require('dotenv').config();

const DBClient = new MongoClient(process.env.MONGO_CONNECTION);
const topAPIInstance = new Api(process.env.TOPGG_TOKEN);

const statistics = async () => { // Add pm2 monitoring
      try {
            await DBClient.connect();

            const topGGData = await topAPIInstance.getBot("719542118955090011");
            const userCount = await DBClient.db("EdgyLoba").collection("users").countDocuments();
            const logsCount = await DBClient.db("EdgyLoba").collection("logs").countDocuments();
            const historyCount = await DBClient.db("EdgyLoba").collection("userHistory").countDocuments();
            const serverCount = await DBClient.db("EdgyLoba").collection("guilds").countDocuments();

            return {
                  counts: {
                        userCount: userCount,
                        logsCount: logsCount,
                        historyCount: historyCount,
                        serverCount: serverCount
                  }, 
                  topGG: {
                        monthlyVotes: topGGData.monthlyPoints,
                        totalVote: topGGData.points,
                  }
            }
      } catch (error) {
            console.log(error);
      } finally {
            await DBClient.close();
      }
}

module.exports = statistics;