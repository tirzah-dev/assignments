const mongoose = require("mongoose");

const { Schema } = mongoose;

const eventSchema = new Schema({
    date: Date,
    host: String,
    address: String, //what kind of data type is needed to work with google maps API
    book: {
        title: String,
        author: String,
        quote: String,
        // reviews: url from goodReads
    },
    comments: [{
        date: Date,
        commenter: String,
        chapter: String,
        text: String
    }]
})

module.exports = mongoose.model("Event", eventSchema);
