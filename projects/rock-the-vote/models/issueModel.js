const mongoose = require("mongoose");

const { Schema } = mongoose;

const isseSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: false
    },
    votes:{
        upVotes: {
            type: Number,
            default: 0
        },
        downVotes: {
            type: Number,
            default: 0
        },
        totalVotes:{
            type: Number,
            default: 0
        }
    },
    comments: Array
});
 
module.exports = mongoose.model("Issue", issueSchema);