var express = require("express");

var app = express();
app.use("/", express.static(__dirname+"/public"));

app.listen(4000, function(){
	console.log("Server running at localhost:4000")
});