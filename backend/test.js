const express = require('express');
const connectDB = require("./db");
const app = express();

const clientDB = await connectDB();
const db = clientDB.db(process.env.MONGO_DB_NAME);


console.log(user)
