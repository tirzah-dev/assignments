const express = require("express");
const agencyRouter = express.Router();

const AgencyModel = require("../models/agencyModel");

agencyRouter.route("/")
    .get((req, res) => {
        AgencyModel.find(req.query, (err, foundAgencies) => {
            if (err) return res.send(err);
            res.status(200).send(foundAgencies);
        })
    })
    .post((req, res) => {
        const newAgency = new AgencyModel(req.body);
        newAgency.save((err, addedAgency) => {
            if(err)return res.send(err);
            res.status(200).send(addedAgency);
        })
    });

    agencyRouter.route("/:id")
        .get((req, res) => {
            AgencyModel.findOne({_id: req.params.id}, (err, foundAgency) => {
                if(err) return res.send(err);
                if(!foundCat) return res.status(404).send({message: "Agency not found"});
                res.status(200).send(foundCat);
            })
        })
        .delete((req, res) => {
            AgencyModel.findOneAndRemove({_id: req.params.id}, (err, deletedAgency) => {
                if(err) return res.send(err);
                if(!deletedAgency) return res.status(404).send({message: "Agency not found"});
                res.status(200).status({message: "The Agency: " + deletedAgency.name + " successfully deleted"})
            })
        })
        .put((req, res) => {
            AgencyModel.findOneAndUpdate({_id: req.params.id}, req.body,
            {
                new: true }, (err, updatedAgency) => {
                    if(err) return res.send(err);
                    if(!updatedAgency) return res.status(404).send({message: "Agency not found"});
                    res.status(200).send(updatedCat);
                    })
                })

module.exports = agencyRouter;