const Ninja = require('../models/ninja.model');//import the model so that the controller know how to talk to the db to query the db

module.exports.sayHello = (req, res) => {
    res.json({msg:"Hello, Will this be Ninja API"})
}

//Find all ninjas
module.exports.findAllNinjas = (req,res) => {
    Ninja.find()
        .then(allNinjas => {
            res.json({results:allNinjas})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
    })
}    

//Create a ninja
module.exports.createNinja = (req, res) => {
    //req.body represents form information
    Ninja.create(req.body)
        .then(newlyCreateNinja => {
        res.json({results:newlyCreateNinja})
    })
    .catch(err => {
        res.json({ msg: "Something went wrong", error: err })
})
    
}

//Find one ninja
module.exports.findOneNinja = (req, res) => {
    Ninja.findOne({ _id: req.params.id })
        .then(foundNinja => {
            res.json({results:foundNinja})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}

//Update a ninja
module.exports.updateNinja = (req, res) => {
    Ninja.findByIdAndUpdate({ _id: req.params.id },//specify which ninjas to update by id
        req.body,
    {new:true,runValidators:true}) //specify the form information to update the ninja
        .then(updateNinja => {
            res.json({results:updateNinja})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}

//Delete a ninja
module.exports.deleteNinja = (req, res) => {
    Ninja.deleteOne({ _id: req.params.id })
        .then(deleteNinja => {
            res.json({results:deleteNinja})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}

//Random ninjas by index
module.exports.findRandomNinja = (req,res) => {
    Ninja.find()
        .then(allNinjas => {
            //get a random index number from index 0 up to but not including the allQuotes.length
            let randomIdx=Math.floor(Math.random()*allNinjas.length)

            res.json({results:allNinjas[randomIdx]})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
    })
}