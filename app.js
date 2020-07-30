const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
require('dotenv').config();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const http = require("http");
const fs = require("fs");
var multer = require('multer');

// Mongoose connection
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// STORE the DATA
var d = new Date();
var postSchema = new mongoose.Schema({
 Pests: {
   type: String,
   required: true
 },
 Density: {
   type: String,
   required: true
 },
 Location: {
   type: String,
   required: true
 },
 Description: {
   type: String,
   required: false
 },
 Date: {
   type: String,
   required: true
 },
}, {collection: 'Posts'});
var Post = mongoose.model("Post", postSchema);

app.post("/add", (req, res) => {
 var d = new Date();
 var myData = new Post(req.body);
 myData.save()
 .then(item => {
   app.get("/data", (req, res) => {
     Post.find({__v: 0} , function(err, data){
       if(err){
         console.log(err);
       };
       res.send(data);
     });
   });
 })
 .catch(err => {
 res.status(400).send("unable to save to database");
 });
});

// GET the DATA
app.get("/data", (req, res) => {
  Post.find({__v: 0} , function(err, data){
    if(err){
      console.log(err);
    };
    res.send(data);
  });
});

//add the router
app.use(express.static("public"));
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
