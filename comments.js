// Create web server
// Load the express module
var express = require('express');
var app = express();

// Load the mysql module
var mysql = require('mysql');

// Create a connection object
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

// Connect to the database
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to the database!");
});

// Create a route for the application
app.get('/', function (req, res) {
  con.query("SELECT * FROM comments", function (err, result, fields) {
    if (err) throw err;
    res.send(result);
  });
});

// Start the server on port 8080
app.listen(8080, function () {
  console.log('Server is running on http://localhost:8080');
});