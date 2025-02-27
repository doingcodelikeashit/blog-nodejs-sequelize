const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT;
app.use(express.json());
const db = require("./config/dbConnect");
const mainRouter = require("./mainRouter");
const syncModels = require("./config/syncFunction");
db.dbConnect();
syncModels();
app.use("/api/v1", mainRouter);
app.listen(port, () => console.log(`Server started on ${port}!`));
