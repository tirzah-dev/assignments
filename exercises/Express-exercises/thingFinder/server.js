const express = require("express");
const uuid = require("uuid");
const bodyParser = require("body-parser");

const app = express();
let things = require("./things");
const port = 9797;

app.use(bodyParser.json());

app.route("/things") 
    .get((req, res) => {
        const { query } = req;
        const queriedThings = thing.filter( thing => {
            for (let key in Query){
                if (!thing.hasOwnProperty(key) || String(thing[key]).toLowerCase() !== query[key].toLowerCase()) {
                    return false;
                }
            }
            return true;
        })
        res.status(200).send(queriedThings)
    })
    .post((req, res)=> {
        const newThing = req.body;
        newThing._id = uuid();
        things.push(newThing);
        res.status(202).send(newThing);
    });

    app.route("/things/:id")
        .get((req, res)=> {
            const { id } = req.params;
            const foundThing = things.filter(thing => thing.id === id)[0];
            res.status(200).send(foundThing);
        })
        .delete((req, res)=> {
            const { id } = req.params;
            things = things.filter(thing => thing._id !== id);
            res.status(204).send();
        })
        .put((req, res) => {
            const { id } = req.params;
            let editedThing = req.body;
            things = things.map(thing => thing._id === id ? editedThing = {...thing,  ...editedThing} : thing);
            res.status(200).send(editedThing);
        })
app.listen(port, ()=> console.log("Server running on port " + port));
