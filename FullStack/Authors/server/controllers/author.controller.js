const Author = require('../models/author.model');//import the model so that the controller know how to talk to the db to query the db

module.exports.sayHello = (req, res) => {
    res.json({msg:"Hello, Will this be Author API"})
}

//Find all authors
module.exports.findAllAuthors = (req,res) => {
    Author.find()
        .then(allAuthors => {
            res.json({results:allAuthors})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
    })
}    

//Create a author
module.exports.createAuthor = (req, res) => {
    //req.body represents form information
    Author.create(req.body)
        .then(newlyCreateAuthor => {
        res.json({results:newlyCreateAuthor})
    })
    .catch(err => {
        res.json({ msg: "Something went wrong", error: err })
})
    
}

//Find one author
module.exports.findOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(foundAuthor => {
            res.json({results:foundAuthor})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}

//Update a author
module.exports.updateAuthor = (req, res) => {
    Author.findByIdAndUpdate({ _id: req.params.id },//specify which authors to update by id
        req.body,
    {new:true,runValidators:true}) //specify the form information to update the author
        .then(updateAuthor => {
            res.json({results:updateAuthor})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}

//Delete a author
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(deleteAuthor => {
            res.json({results:deleteAuthor})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}

//Random authors by index
module.exports.findRandomAuthor = (req,res) => {
    Author.find()
        .then(allAuthors => {
            //get a random index number from index 0 up to but not including the allQuotes.length
            let randomIdx=Math.floor(Math.random()*allAuthors.length)

            res.json({results:allAuthors[randomIdx]})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
    })
}