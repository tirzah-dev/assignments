const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const eventRouter = require("./routes/events");

const app = express();
const port = 8431;

app.use(bodyParser.json());

// routes
app.use("/events", eventRouter);

mongoose.connect("mongodb://localhost:27017/clubevents", (err) => {
    if (err) console.error(err);
    console.log("Connected to MongoDB");
})

app.listen(port, () => console.log("Server running in port " + port)); 