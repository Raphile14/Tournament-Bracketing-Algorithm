// Requirements
const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');

// Setting Up
const app = express();
const server = require("http").createServer(app);
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({extended: false}));
app.use(express.static('public'));
app.set('views', path.join(__dirname, '../views')); 

// Import Routes
app.use('/', require('./routes/index'));

// Redirect
app.get("*", (req, res) => {
    return res.redirect("/input");    
});

// Port
server.listen(process.env.PORT, () => {
    console.log("Server is listening on " + process.env.PORT);
});