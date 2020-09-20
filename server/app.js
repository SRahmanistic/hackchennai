const Express = require("express");
const Mongoose = require("mongoose");
const BodyParser = require("body-parser");
Mongoose.connect("mongodb://localhost:27017/");
var app = Express();
const Data = require('./model/data');
// const DataModel = Mongoose.model("data", {
    
// });
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

const cors = require('cors');
app.use(cors());

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
  
app.post("/person", async (request, response) => {
    try {
        var person = new Data(request.body);
        var result = await person.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});
app.get("/people", async (request, response) => {
    try {
        var result = await Data.find().exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});
app.get("/person/:id", async (request, response) => {
    try {
        var person = await Data.findById(request.params.id).exec();
        response.send(person);
    } catch (error) {
        response.status(500).send(error);
    }
});
app.put("/person/:id", async (request, response) => {
    try {
        var person = await Data.findById(request.params.id).exec();
        person.set(request.body);
        var result = await person.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});
app.delete("/person/:id", async (request, response) => {
    try {
        var result = await Data.deleteOne({ _id: request.params.id }).exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.listen(3000, () => {
    console.log("Listening at :3000...");
});