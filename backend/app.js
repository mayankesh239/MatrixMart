const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const middleware = require('./middleware/error');
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Route Imports

//Product Route
const product = require("./routes/productRoute");

//User Route
const user = require("./routes/userRoutes");

//Order Route
const order= require("./routes/orderRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1",order );

//middleware for errors 
app.use(middleware);

module.exports = app;