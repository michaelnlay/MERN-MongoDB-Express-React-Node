const express = require("express"); //import express so we can use express features
const app = express(); //create our ap variable which is an instance of express
const port = 8000; //for express, the backend port is 8000;

//Step 8==============================================
//NEED this to handle POST Results. Have these two lines before the routes!!!
app.use(express.json());//lets our app convert form into json
app.use(express.urlencoded({ extended: true }));//lets our app parse form information

//Step 4===========================================================
//our fake data here
let quotes = [
    {content: "It is not the mountains ahead that will wear you out, it is the pebble in your shoe", author:"Muhammad Ali"},
    {content:"A wise man once said nothing at all", author:"Wes"},
    {content:"Comparison is a theif of joy", author:"Theodore Roosevelt"},
    {content:"Fall down 7 times stand up 8", author:"Japanese Proverb"},
    {content:"You Attract what you vibrate", author:"Fritz"},
    {content:"Wherever you go, there you are", author:"Eckhart Tolle"},
    {content:"Success is the ability to go from one failure to the next, with no loss of enthusiasm", author:"Winston Churchill"},
    { content: "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.", author: "Michael Scott" },
    {content:"Study MERN a day makes you wiser", author:"Michael Lay"}
    
]


//create our api endpoints here: ex: -> http://localhost:8000/api/hello

/*
in Python, we have this...
@app.route("/api/hello")
def sayHello():
    return "Hello"
*/

//Step 2====================================================
//in here, we use app.get
//our first api endpoint
// req is shorthand for request
// res is shorthand for response
app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello World!!!" });
})

//Step 5 =================================================
//Create API endpoint that take routes and callback function that take req and res
//get all quotes endpoint
app.get("/api/quotes", (req, res) => {
    res.json({count:quotes.length, results:quotes}) //give back object that take
    // res.json(quotes);
})

//Step 6===================================================
//get one quote based on index number
app.get("/api/quotes/:idx", (req, res) => {
    res.json({results:quotes[req.params.idx]})
})

//Step 7================================================
//create a new quote //then try on PostMan **checkout step 8 first
app.post("/api/quotes", (req, res) => {
    console.log("req.body is this-->", req.body)//req.body is the form information that was submitted (the new quote object)
    quotes.push(req.body);
    res.json({count:quotes.length, results:quotes})    
})//it's okay to have the same routes as the

//NOTE: all the new information that was add to the Postman will disappear after close the server since we don't have DB yet.

//Step 9=====================================================
//Update a quote base on index number
app.put("/api/quotes/:idx", (req, res) => {
    quotes[req.params.idx] = req.body; //updated the quote array at specific index with the information from the form(form info is req.body)

    res.json({count:quotes.length, results:quotes})
})

//Step 10=====================================
//Delete a quote base on index number
app.delete("/api/quotes/:idx", (req, res) => {
        // we can get this `id` variable from req.params
        const idx = req.params.idx;
        
        quotes.splice(idx, 1);//splice remove a value at a specified index
        res.json({count:quotes.length, results:quotes})

    });



//Step 3=======================================================
// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
