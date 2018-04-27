const express = require("express");
const eventRouter = express.Router();

const EventModel = require("../models/events");

// routes
eventRouter.route("/")
    .get((req, res) => {
        EventModel.find(req.query)
            // .populate(bookId) 
            .exec((err, foundEvents) => {
                if (err) return res.status(500).send(err);
                res.status(200).send(foundEvents)
            });
    })
    // get one
    //post-create
    .post((req, res) => {
        const newEvent = new EventModel(req.body);
        newEvent.save((err, savedEvent) => {
            if (err) return res.send(err);
            res.status(200).send(newEvent)
        });
    })
//GET One
eventRouter.route("/:id")
    .get((req, res) => {
        EventModel.findOne({ _id: req.params.id })
            // .populate("bookId")
            .exec((err, foundEvent) => {
                if (err) return res.send(err);
                if (!foundEvent) return res.status(404).send({ message: "Event not found" });
                //Authentication
                res.status(200).send(foundEvent);
            });
    })

    //DELETE One
    .delete((req, res) => {
        EventModel.findOneAndRemove({ _id: req.params.id }, (err, deletedEvent) => {
            if (err) return res.send(err);
            if (!deletedEvent) return res.status(404).send({
                message: "Event not found"
            })
            res.status(204).send({ message: "Event successfully deleted" });
            console.log("Event deleted");

        })
    })
    //put-edit One
    .put((req, res) => {
        EventModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            // .populate("bookId")
            .exec((err, updatedEvent) => {
                if (err) return res.send(err);
                if (!updatedEvent) return res.status(404).send({ message: "Event not found" });
                res.status(200).send(updatedEvent);
            })
    });
//add comment
eventRouter.route("/:id/add-comment")
    .post((req, res) => {
        EventModel.findById(req.params.id, (err, foundEvent) => {
            if (err) return res.send(err);
            foundEvent.comments.push(req.body);//push body of request to comments array
            foundEvent.save((err, savedEvent) => {
                if (err) return res.send(err);
                res.status(200).send(savedEvent)
            });// save event to collection
            // send back event to client
        })
    })
//delete comment
eventRouter.route("/:id/delete-comment/:commentId")
    .delete((req, res) => {
        EventModel.findById(req.params.id, (err, foundEvent) => {
            if (err) return res.send(err);
            foundEvent.comments.id(req.params.commentId).remove();
            foundEvent.save((err, savedEvent) => {
                if (err) return res.send(err);
                res.status(204).send(savedEvent)
            });
        })
    })
//edit comment
eventRouter.route("/:id/edit-comment/:commentId")
    .put((req, res) => {
        EventModel.findById(req.params.id, (err, foundEvent) => {
            if (err) return res.send(err);
            for (let key in req.body) {
                foundEvent.comments.id(req.params.commentId)[key] = req.body[key];
            }
            foundEvent.save((err, savedEvent) => {
                if (err) return res.send(err);
                res.status(200).send(savedEvent)
            })
        })
    })


module.exports = eventRouter;