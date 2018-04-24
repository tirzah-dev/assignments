const express = require("express");
const catRouter = express.Router();

const CatModel = require("../models/catmodel");

//actual routes go here
catRouter.route("/")
    .get((req, res) => {
        CatModel.find(req.query, (err, foundCats) => {

            if(err){
                res.send(err);
            }else{
                res.status(200).send(foundCats);
            }
            //can also write it like so...
            //if(err) return res.send(err);
            //res.status(200).send(foundCats);
        })
        //check
        //filter       
})
.post((req, res)=>{
    const newCat = new CatModel(req.body);
    newCat.save((err, addedCat) => {
        if(err)return res.send(err);
        res.status(200).send(addedCat);
    })
//use save() to add a cat to the database

});

//GET ONE REQUEST
catRouter.route("/:id")
    // use findOne() to get a particular cat

    .get((req, res) => {
        // CatModel.findById(req.params.id, ()=>{})
        CatModel.findOne({_id: req.params.id}, (err, foundCat) => {
            if(err) return res.send(err);
            if(!foundCat) return res.status(404).send({message: "Cat not found"});
            res.status(200).send(foundCat);
        })
    })

//DELETE ONE
.delete((req, res) => {
    // CatModel.findByIdandRemove(req.params.id, ()=>{})
    CatModel.findOneAndRemove({ _id: req.params.id }, (err, deletedCat) => {
        if(err)
            return res.send(err);
            if(!deletedCat) return res.status(404).send({message: "Cat not found"});
            res.status(200).send({message: deletedCat.name + " successfully deleted"});
    })
})
//PUT
.put((req, res) => {
    //CatModel.findByIdandUpdate(req.params.id, ()=>{}
    CatModel.findOneAndUpdate({ _id: req.params.id}, req.body, {
    new: true }, (err, updatedCat) => {
        if(err) return res.send(err);
        if(!updatedCat) return res.status(404).send({message: "Cat not found"});
        res.status(200).send(updatedCat);
    })
})

//put

module.exports = catRouter;