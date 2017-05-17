/*

	EVOLUTION

var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()

app.use("/node_modules",express.static("node_modules"));
app.use("/app",express.static("app"));
app.use("/images",express.static("images"));
app.use("/css",express.static("css"));
app.use("/js",express.static("js"));
app.use("/json",express.static("json"));

app.get('/', function (req, res) {
  	var index = fs.readFileSync(__dirname+"/index.html");
	res.end(index);
});

app.post('/give', jsonParser, function(req, res) {	
	console.log("test");	
	console.log(req.body);		
	//console.log(req.files);		
	fs.writeFile(__dirname+"/json/post.json", JSON.stringify(req.body), function(err) {
		if(err) {
		   return console.log(err);
		}
		res.send('The file was saved!');
	}); 
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
*/