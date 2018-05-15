const express = require("express");
const issueRouter = express.router();

const issueModel = require("../models/issueModel");

//routes
issueRouter.route("/")
    .get((req, res) => {
        IssueModel.find(req.query)
        .exec((err, foundIssues) => {
            if(err) return res.status(500).send(err);
            res.status(200).send(foundIssues)
        });
    })
    .post((req, res) => {
        const newIssue = new IssueModel(req.body);
        newIssue.save((err, savedIssue) => {
            if (err) return res.send(err);
            res.status(200).send(foundIssues)
        });
    })

issueRouter.route("/:id")
    .get((req, res) => {
        IssueModel.findOne({_id: req.params.id})
        .exec((err, foundIssue) => {
            if(err) return res.send(err);
            if(!foundIssue) return res.status(404).send({
                message: "issue not found"});
            res.status(200).send(foundIssue);
        });
    })
    .delete((req, res) => {
        IssueModel.findOneAndRemove({_id: req.params.id }, (err, deletedIssue) => {
            if(err) return res.send(err);
            if(!deletedIssue) return res.status(404).send({
                message: "Issue not found"
            })
            res.status(204).send({message: "Issue successfully deleted"});
            console.log("Issue: " + deletedIssue.title +  "has been successfully DELETED");
        })
    })
    .put((req, res) => {
        IssueModel.findOneAndUpdate({ _id: req.params.id },
        req.body, { new: true })
        .exec((err,updatedIssue) => {
            if(err) return res.send(err);
            if (!updatedIssue) return res.send(404).send({
                message: "Issue not found" });
                res.status(200).send(updatedIssue);
        })
    });

//add comment
issueRouter.route("/:id/add-comment")
    .post((req, res) => {
        IssueModel.findById(req.params.id, (err, foundIssue) => {
            if(err) return res.send(err);
            foundIssue.comments.push(req.body);
            foundIssue.save((err, savedIssue) => {
                if(err) return res.send(err);
                res.status(200).send(savedIssue)
            });
        })
    })
//delete comment
issueRouter.route("/:id/delete-comment/:commentId")
    .delete((req, res) => {
        IssueModel.findById(req.params.id, (err, foundEvent) => {
            if (err) return res.send(err);
            foundIssue.comments.id(req.params.commentId).remove();
            foundIssue.save((err, savedIssue) => {
                if(err) return res.send(err);
                res.status(204).send(savedIssue)
            });
        })
    })
//edit comments
issueRouter.route("/:id/edit-comment/:commentId")
    .put((req, res) => {
        IssueModel.findById(req.params.id, (err, foundIssue) => {
            if(err) return res.status(500).send(err);
            comment.set(req.body);
            foundIssue.save((err, savedIssue) =>{
                if(err) return res.send(err);
                res.status(200).send(savedEvent)
            })
        })
    })

