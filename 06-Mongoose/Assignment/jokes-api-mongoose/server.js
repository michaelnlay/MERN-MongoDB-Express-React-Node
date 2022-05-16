//Step 1=================
const express = require("express"); //importing express
const app = express(); //create our app variable which is an instance of express
const port = 8000; //declaring port for backend api to run in

//Step 6 - create DB table in models folder

//Step 5 import (require mongoose) 
// const mongoose = require('mongoose'); <= in model file now

//Step 2===================
//NEED this to handle POST Results. Have these two lines before the routes!!!
app.use(express.json()); //lets our app convert form into json
app.use(express.urlencoded({ extended: true })); //lets our app parse form information

//Step 4=====================
//Create routes
require("./server/routes/joke.routes")(app);

//Step 5====================
//Mongoose connection
require("./server/config/mongoose.config");


//Step 3
app.listen(port, () => console.log(`Listening on port: ${port}`));
