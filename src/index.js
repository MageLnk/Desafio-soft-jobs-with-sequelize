require("dotenv").config();
// Necessaries
// const { sequelize } = require('./models');
const app = require("./app");
// Puerto
const PORT = process.env.PORT;

// Listener
app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Server runing on port: ${PORT}. Everything is fine`);
});
