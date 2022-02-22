let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();
let port =  2020;

let apiRoutes = require("./api-routes");

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/admin', { useNewUrlParser: true});
var db = mongoose.connection;


if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")


// Use Api routes in the App
app.use('/', apiRoutes);
// Launch app to listen to specified port
app.listen(port, () => {
    console.log("Running RestHub on port " + port);
});