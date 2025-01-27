const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConnect");
const userModel = sequelize.define(
  "user",
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userName: {
      type: DataTypes.STRING,
    },
    userPassword: {
      type: DataTypes.STRING,
    },
    userMobile: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      notEmpty: true,
      validate: {
        isEmail: true,
      },
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "user", // Roles: user, admin
    },
    address: DataTypes.STRING,
    token: DataTypes.STRING,
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    paranoid: true,
  }
);
module.exports = userModel;
