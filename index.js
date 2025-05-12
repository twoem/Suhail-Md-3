const bot = require(__dirname + '/lib/smd')
const { VERSION } = require(__dirname + '/config')

const start = async () => {
    Debug.info(`Suhail ${VERSION}`)
  try {
    await bot.init()
    bot.logger.info('⏳ Database syncing!')
    await bot.DATABASE.sync()
    await bot.connect()
const express = require("express");
const app = express();

// Your actual web app or bot code
app.get("/", (req, res) => {
  res.send("App is alive!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

  } catch (error) {
    Debug.error(error);
    start();
  }
}
start();
