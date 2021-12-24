const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const middleware = require('./middleware/error');
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const dotenv = require('dotenv');


//config
dotenv.config({ path: "./config/config.env" });


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

//Payment Route
const payment= require("./routes/paymentRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1",order );
app.use("/api/v1",payment );

//middleware for errors 
app.use(middleware);

module.exports = app;