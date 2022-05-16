//connect to controller

const QuoteController = require("../controllers/quote.controller")

module.exports = (app) => {
    app.get("/api/hello", QuoteController.sayHello);
    // app.get("/api/hello", (req, res) => { //this function can be inside the controller
    //     res.json({ msg: "Hello, Mongoose API" })
    //random quote
    app.get('/api/quotes/random',QuoteController.findRandomQuote)
    // })
    app.get("/api/quotes", QuoteController.findAllQuotes);
    app.post("/api/quotes", QuoteController.createQuote)
    app.get("/api/quotes/:id", QuoteController.findOneQuote);
    app.put("/api/quotes/:id", QuoteController.updateQuote);

    app.delete("/api/quotes/:id",
        QuoteController.deleteQuote)
    
}