var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
 
const db = require('../app/config/db.config');
  
// force: true will drop the table if it already exists
db.sequelize.sync({force: false}).then(() => {
  console.log('Drop and Resync with { force: false }');
});
 
require('../app/controller/user.route')(app);

// Create a Server
var server = app.listen(8081, function () {
 
  
  var port = server.address().port
 
  console.log("App listening at http://localhost:%s",  port)
})