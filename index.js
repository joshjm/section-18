const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true})); // need this basically all the time

app.get("/", function(req, res){
    res.sendFile(__dirname +"/index.html");
});

// LISTEN FOR POST REQUESTS
app.post("/", function(req, res){

  var height = Number(req.body.height);
  var weight = Number(req.body.weight);

  var result = weight/(height*height);
 res.send("bmi = " +result);
});

app.listen(3000, function(){
  console.log("server runnning on port 3000");
});
