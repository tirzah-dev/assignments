const mongoose = require('mongoose');

const { Schema } = mongoose;

//Schema is a constructor- it builds a blueprint for each item in your collection
// determines the template for all documents in that collection
//every collection has a Schema

const agencySchema = new Schema ({
    name: String,
    location: String
});

const AgencyModel = mongoose.model('agencies', agencySchema);
module.exports = AgencyModel;