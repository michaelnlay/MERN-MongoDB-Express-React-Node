//Step 1===================================================================
const express = require("express"); //importing express
const app = express(); //create our app variable which is an instance of express
const port = 8000;//declaring port for backend api to run in

//After Step 5, create 4 different folders in side the server folder for modulization
//models - put all your DB (code relate to your DB)
//controllers
//routes
//config - the purpose to have a file of the mongoose connection code

//Step 6==================================================================
//create DB table in models folder

// //Step 5A
// const mongoose = require('mongoose');


//Step 2=====================================================
//NEED this to handle POST Results. Have these two lines before the routes!!!
app.use(express.json());//lets our app convert form into json
app.use(express.urlencoded({ extended: true }));//lets our app parse form information

// //Step 5===================================================
//will put thse into the config file under server folder
// //Mongoose connection
// mongoose.connect('mongodb+srv://root:root@clustermay.psr7l.mongodb.net/quotes_db?retryWrites=true&w=majority', { //for MongoDB cloud
// mongoose.connect('mongodb://localhost/name_of_your_DB', { //this for people with local MongoDB installed locally
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => console.log('Established a connection to the database'))
//     .catch(err => console.log('Something went wrong when connecting to the database ', err));

require("./server/config/mongoose.config"); //need thise to connect mongoose here after delete the above Step 5 code block


//Step 4=======================================================
//Create route (start with hello route to make sure its work)
//modualize this to the route folder
//Copy and paste this file into the quote.routes.js
// app.get("/api/hello", (req, res) => {
//     res.json({ msg: "Hello, Mongoose API" })
// })
//import route **********
//Make sure routes import is below all the App.USE commands above
require("./server/routes/quote.routes")(app); //have to pass (app) to the route file inorder to work

//Step 3=======================================================
// this needs to be below the other code blocks
//so your app can listen to the request to local host 8000
app.listen( port, () => console.log(`Listening on port: ${port}`) );
