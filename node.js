var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "data.json", 'utf8', function (err, data) {
       console.log( data.toString() );
       res.end( data );
   });
})

var server = app.listen(9000, "0.0.0.0",function () {

  var host = server.address().address;
  var port = server.address().port

  console.log("Example app listening at http://%s:%s",host, port)

})
