const express = require("express");
const uuid = require("uuid");
const bodyParser = require("body-parser");

const app = express();
let cats = require("./cats");
const port = 8999;

//middleware
app.use(bodyParser.json());

//routes
app.route("/cats")//endpoint not a path for this there is not ./blahblah
    .get((req, res) => {
        const { query } = req;
        //check each cat in the array
        //filter it by matching properties/values
        const queriedCats = cats.filter( cat => {
            for (let key in Query) {
                if (!cat.hasOwnProperty(key) || String(cat[key]).toLowerCase() !== query[key].toLowerCase()) {
                    return false;
                }
            }
            return true;
        })
        res.status(200).send(queriedCats);        
        
    })
    //post Request:
        //convert request body from JSON
        //provide and id to the data (cat) being added
    .post((req, res)=>{
        //give data in request body an id
        // console.log(req.body);
        const newCat = req.body;
        newCat._id = uuid();
        //save the data in request body to the 'database'
        cats.push(newCat);
        //send back the data that was added
        res.status(202).send(newCat);
    });

    // GET One request
    // any request to the cats/id endpoint we will send back the cat matching that id
    app.route("/cats/:id")
        .get((req, res)=> {
            //get param id:
            const { id } = req.params;
            // console.log(id)
            const foundCat = cats.filter(cat => cat._id === id)[0];
            //sendback the cat
            res.status(200).send(foundCat);
        })
        // DELETE one request
        .delete((req, res)=> {
            const { id } = req.params;
            //find and remove cat matching id:
            cats = cats.filter(cat => cat._id !== id);
            //send back the message the cat was removed
            res.status(204).send();
        })
        //PUT - edit one request
        .put((req, res)=>{
            //find param id
            const { id } = req.params;
            let editedCat = req.body;
            //map throgh cats and replace the cat w/ matching id with req.body
            cats = cats.map(cat => cat._id === id ? editedCat = {...cat, ...editedCat} : cat);
            res.status(200).send(editedCat);
        })

app.listen(port, ()=> console.log("Server running on port " + port));