const { Sequelize } = require("sequelize");
const dotenv = require("dotenv").config();
const sequelize = new Sequelize("blog-nodejs", "root", "Prince#0506", {
  host: process.env.HOST,
  port: process.env.DBPORT,
  dialect: process.env.DIALECT,
});
const dbConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB connected");
  } catch (err) {
    console.log("cant connect to database", err);
  }
};
module.exports = {
  sequelize,
  dbConnect,
};
