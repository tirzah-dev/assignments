const express = require('express');
const uuid = require('uuid');
const bp = require('body-parser');

const app = express();
const port = 8888;

const db =require('./bounties');
//middleware
app.use(bp.json);

//routes
app.route('/bounties')
    .get((req, res) => {
        const { query } = req
        console.log("query", query)
        const queriedBounties = db.filter(obj => {
            for(let key in query) {
                if(query[key] === ""){
                    continue;
                }
                if(!obj.hasOwnProperty(key) || String(obj[key]).toLowerCase() !== query[key].toLowerCase()) {
                    return false;
                }
            }
            return true;
        })  
        res.status(200).send(queriedBounties);             
    })

app.listen(port, () => { console.log('Server running on port ' + port)});