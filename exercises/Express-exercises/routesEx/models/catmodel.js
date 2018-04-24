const mongoose = require('mongoose');

const { Schema } = mongoose;

//Schema is a constructor- it builds a blueprint for each item in your collection
// determines the template for all documents in that collection
//every collection has a Schema

const catSchema = new Schema ({
    name: String,
    breed: {
        required: true,
        type: String
    },
    age: Number,
    adoptionStatus: {
        type: String,
        default: "not adopted"
    },
    agencyId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "agencies"
    }
})

const CatModel = mongoose.model('cats', catSchema);
module.exports = CatModel;