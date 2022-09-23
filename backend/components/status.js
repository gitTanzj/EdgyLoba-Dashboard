const pm2 = require("pm2");

const status = () => {
      try {
            pm2.connect(function(err) {
                  if (err) throw err;
                  pm2.list((err, list) => {
                        if (err) throw err;
                        console.log(list);
                  });
            })
      } catch (error) {
            console.log(error);
      } finally{
            pm2.disconnect();
      }
};

module.exports = status;