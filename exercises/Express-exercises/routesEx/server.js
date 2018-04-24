const express = require("express");
const bodyParser = require("body-parser");

const catRouter = require("./routes/cats.js");

const app = express();
const port = 8080;

//middleware
app.use(bodyParser.json());
app.use(logger);
//routes

//outsource the 'cat' routes to the cats.js
//import then into this file, and then when a request is made to the /cats endpoint, route the request/response objects to them

app.use("/cats", catRouter);

app.listen(port, () => console.log("Server running on port " + port));
