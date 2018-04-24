const express = require('express');
// const uuid = require('uuid');
const bp = require('body-parser');
const mongoose = require('mongoose');

const logger = require("./middleware/logger");
const catRouter = require("./routes/cats");
const agencyRouter = require("./routes/agency");

const app = express();
const port = 8080;

// const db = require('./queryIt');

//middleware
app.use(bp.json());
app.use(logger);

//routes
app.use("/cats", catRouter);
app.use("/agency", agencyRouter);


mongoose.connect("mongodb://localhost:27017/animals", (err) => {
    if(err) console.error(err);
    console.log("Connected to MongoDB")
})
app.listen(port, () => {console.log('Server running on port ' + port)});