const userModel = require("../user/userModel");
const { dbConnection, sequelize } = require("./dbConnect");
const syncModels = async () => {
  try {
    await userModel.sync({ force: false });
    console.log("User model synchronized.");

    console.log("All models and associations have been successfully applied.");
  } catch (error) {
    console.log("error on database", error);
  }
};
module.exports = syncModels;
