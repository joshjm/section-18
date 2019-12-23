const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true})); // need this basically all the time

app.get("/", function(req, res){
    res.sendFile(__dirname +"/index.html");
});

// LISTEN FOR POST REQUESTS
app.post("/", function(req, res){

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num1);

  var result = num1 +num2;
 res.send("calc = " +result);
});

app.listen(3000, function(){
  console.log("server runnning on port 3000");
});
