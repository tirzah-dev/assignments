const express = require("express");
const bodyParser =require("body-parser");
const mongoose = require("mongoose");
const path = require("path"); //needed to deploy on Heroku

const router = require("./routes/issuesRoute.js");

const app = express();
const port = process.env.PORT || 8080;
const database = process.env.MONGODB_URI || "mongodb://localhost:27017/rock-the-vote" //add endpoint

//middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "build")));//needed to deploy to Heroku

//routes
app.use("/api/issuesRoute", router);

mongoose.connect(database, (err) => {
    if(err) console.error(err);
    console.log("Connected to the Database Mongo DB PANTS");
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => console.log("Server running in port: " + port));

