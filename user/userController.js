const bcrypt = require("bcrypt");
const UserModel = require("./userModel");
const jwt = require("jsonwebtoken");
const userService = require("./userServices");
const dotenv = require("dotenv").config();
exports.createUser = async (req, res, next) => {
  try {
    const userData = {
      userName: req.body.userName,
      userPassword: req.body.userPassword,
      mobile: req.body.mobile,
      email: req.body.email,
      role: req.body.role,
      address: req.body.address,
    };

    const createdUser = await userService.createUser(userData);
    return res.status(200).json(createdUser);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
exports.login = async (req, res, next) => {
  try {
    const { userName, userPassword } = req.body;

    // Call the service function
    const { loginuser, token } = await userService.loginUser(
      userName,
      userPassword
    );

    // Send response
    res.json({ loginuser, token });
  } catch (error) {
    next(error);
  }
};
exports.getMe = async (req, res, next) => {
  try {
    const user = await UserModel.findByPk(req.user.id);
    return res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
exports.updateUser = async (req, res, next) => {
  try {
    const userId = req.userId; // Assuming userId is set in the request
    const userData = req.body;

    // Call the service function to update user
    await userService.updateUser(userId, userData);

    // Send success response
    return res.status(200).json({ msg: "Data updated successfully" });
  } catch (err) {
    if (err.message === "User not found") {
      return res.status(404).json({ err: err.message });
    }
    next(err);
  }
};
exports.deleteUser = async (req, res, next) => {
  try {
    const userId = req.userId; // Assuming userId is set in the request

    // Call the service function to delete user
    const result = await userService.deleteUser(userId);

    // Send success response
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
