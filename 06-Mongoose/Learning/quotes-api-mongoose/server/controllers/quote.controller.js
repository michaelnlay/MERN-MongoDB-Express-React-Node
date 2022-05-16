
const Quote = require('../models/quote.model'); //import the model so that the controller knows how to talk to the db to query the database

module.exports.sayHello = (req, res) => {
    res.json({msg:"Hello, Mongoose API Time"})
}

module.exports.findAllQuotes = (req,res) => {
    Quote.find()
        .then(allQuotes => {
            res.json({results:allQuotes})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
    })
}

module.exports.createQuote = (req, res) => {
    //req.body represents form information
    Quote.create(req.body)
        .then(newlyCreateQuote => {
        res.json({results:newlyCreateQuote})
    })
    .catch(err => {
        res.json({ msg: "Something went wrong", error: err })
})
    
}

module.exports.findOneQuote = (req, res) => {
    Quote.findOne({ _id: req.params.id })
        .then(foundQuote => {
            res.json({results:foundQuote})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}

module.exports.updateQuote = (req,res) => {
    Quote.findOneAndUpdate({ _d: req.params.id }, //speciafy which quote to update
        req.body,//specify the form information to update the quote with
        {new:true, runValidators:true}
    ) 
        .then(updateQuote=> {
            res.json({results:updateQuote})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}

module.exports.deleteQuote = (req, res) => {
    Quote.deleteOne({ _id: req.params.id })
        .then(deleteQuote => {
            res.json({results:deleteQuote})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
    
}

//Random quotes by index
module.exports.findRandomQuote = (req,res) => {
    Quote.find()
        .then(allQuotes => {
            //get a random index number from index 0 up to but not including the allQuotes.length
            let randomIdx=Math.floor(Math.random()*allQuotes.length)

            res.json({results:allQuotes[randomIdx]})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
    })
}