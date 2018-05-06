const express = require('express');
const uuid = require('uuid');
const bp = require('body-parser');

const app = express();
let bounties = require('./bounties');
console.log(bounties);
const port = 8018;

//middleware
app.use(bp.json());

//routes
app.route('/bounties')
    .get((req, res) => {
        // bounties.find({}, (err, bounties) => {
        //     if (err) {
        //         return res.status(500).send(err);
        //     }
        //     console.log(bounties);
        // return res.status(200).send(bounties);
        res.status(200).send(bounties);
    })
    // const { query } = req
    // console.log("query", query)
    // const queriedBounties = bounties.filter(obj => {
    //     for(let key in query) {
    //         if(query[key] === ""){
    //             continue;
    //         }
    //         if(!obj.hasOwnProperty(key) || String(obj[key]).toLowerCase() !== query[key].toLowerCase()) {
    //             return false;
    //         }
    //     }
    //     return true;
    // })  
    // res.status(200).send(queriedBounties);             
    // })
    .post((req, res) => {
        const newBounty = req.body;
        newBounty._id = uuid();
        bounties.push(newBounty);
        res.status(202).send(newBounty);
        // res.status
        // (200).send({
        //     msg: "yay it worked",
        //     data: req.body
        // })// send the following bounty oject to Bounties array
        // 

    });
app.route('/bounties/:id')
    .get((req, res) => {
        const { id } = req.params;
        const foundBounty = bounties.filter(bounty => bounty._id === id)[0];
        res.status(200).send(foundBounty);
        })
    .delete((req, res) => {
        const { id } = req.params;
        bounties = bounties.filter(bounty => bounty._id !== id);
        res.status(204).send();
    })
    .put((req, res) => {
        const { id } = req.params;
        let editedBounty = req.body;
        bounties = bounties.map(bounty => bounty._id === id ? editedBounty = { ...bounty, ...editedBounty } : bounty);
        res.status(200).send(editedBounty);
    })
    

app.listen(port, () => { console.log('Server running on port ' + port) });