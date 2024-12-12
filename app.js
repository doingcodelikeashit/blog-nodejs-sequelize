const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT;
app.use(express.json());
const db = require("./config/dbConnect");
db.dbConnect();
app.listen(port, () => console.log(`Server started on ${port}!`));
