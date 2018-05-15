const express = require("express");
const uuid = require("uuid");
const bodyParser = require("body-parser");

const app = express();
let todos = require("./todoex");
const port = 8787;

//middleware
app.use(bodyParser.json());

//routes
app.route("/todoex")
    .get((req, res) => {
        res.status(200).send(todos);
    })
    //post Request:
        //convert request body from JSON
        //provide an id to the data (todo) being added
    .post((req, res)=>{
        //give data in request body an id
        // console.log(req.body);
        const newtodo = req.body;
        newtodo._id = uuid();
        //save the data in request body to the 'database'
        todos.push(newtodo);
        //send back the data that was added
        res.status(202).send(newtodo);
    });

    // GET One request
    // any request to the todos/id endpoint we will send back the todo matching that id
app.route("/todoex/:id")
    .get((req, res)=> {
        //get param id:
        const { id } = req.params;
        // console.log(id)
        const foundtodo = todos.filter(todo => todo._id === id)[0];
        //sendback the todo
        res.status(200).send(foundtodo);
    })
    // DELETE one request
    .delete((req, res)=> {
        const { id } = req.params;
        //find and remove todo matching id:
        todos = todos.filter(todo => todo._id !== id);
        //send back the message the todo was removed
        res.status(204).send();
    })
    //EDIT one request
    .put((req, res)=>{
        //find param id
        const { id } = req.params;
        let editedtodo = req.body;
        //map throgh todos and replace the todo w/ matching id with req.body
        todos = todos.map(todo => todo._id === id ? editedtodo = {...todo, ...editedtodo} : todo);
        res.status(200).send(editedtodo);
    })

app.listen(port, ()=> console.log("Server running on port " + port));