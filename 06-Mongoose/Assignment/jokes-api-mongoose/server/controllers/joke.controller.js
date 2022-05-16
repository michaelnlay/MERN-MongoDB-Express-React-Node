const Joke = require('../models/joke.model');//import the model so that the controller know how to talk to the db to query the db

module.exports.sayHello = (req, res) => {
    res.json({msg:"Hello, Will this be Joke API"})
}

//Find all jokes
module.exports.findAllJokes = (req,res) => {
    Joke.find()
        .then(allJokes => {
            res.json({results:allJokes})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
    })
}    

//Create a joke
module.exports.createJoke = (req, res) => {
    //req.body represents form information
    Joke.create(req.body)
        .then(newlyCreateJoke => {
        res.json({results:newlyCreateJoke})
    })
    .catch(err => {
        res.json({ msg: "Something went wrong", error: err })
})
    
}

//Find one joke
module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(foundJoke => {
            res.json({results:foundJoke})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}

//Update a joke
module.exports.updateJoke = (req, res) => {
    Joke.findByIdAndUpdate({ _id: req.params.id },//specify which jokes to update by id
        req.body,
    {new:true,runValidators:true}) //specify the form information to update the joke
        .then(updateJoke => {
            res.json({results:updateJoke})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}

//Delete a joke
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(deleteJoke => {
            res.json({results:deleteJoke})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}

//Random jokes by index
module.exports.findRandomJoke = (req,res) => {
    Joke.find()
        .then(allJokes => {
            //get a random index number from index 0 up to but not including the allQuotes.length
            let randomIdx=Math.floor(Math.random()*allJokes.length)

            res.json({results:allJokes[randomIdx]})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
    })
}