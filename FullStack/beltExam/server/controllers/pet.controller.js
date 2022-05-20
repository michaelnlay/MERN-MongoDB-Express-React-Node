const Pet = require('../models/pet.model');//import the model so that the controller know how to talk to the db to query the db

module.exports.sayHello = (req, res) => {
    res.json({msg:"Hello, Will this be Pet API"})
}

//Find all pets
module.exports.findAllPets = (req,res) => {
    Pet.find()
        .then(allPets => {
            res.json({results:allPets})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
    })
}    

//Create a pet
module.exports.createPet = (req, res) => {
    //req.body represents form information
    Pet.create(req.body)
        .then(newlyCreatePet => {
        res.json({results:newlyCreatePet})
    })
    .catch(err => {
        res.json({ msg: "Something went wrong", error: err })
})
    
}

//Find one pet
module.exports.findOnePet = (req, res) => {
    Pet.findOne({ _id: req.params.id })
        .then(foundPet => {
            res.json({results:foundPet})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}

//Update a pet
module.exports.updatePet = (req, res) => {
    Pet.findByIdAndUpdate({ _id: req.params.id },//specify which pets to update by id
        req.body,
    {new:true,runValidators:true}) //specify the form information to update the pet
        .then(updatePet => {
            res.json({results:updatePet})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}

//Delete a pet
module.exports.deletePet = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then(deletePet => {
            res.json({results:deletePet})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}

//Random pets by index
module.exports.findRandomPet = (req,res) => {
    Pet.find()
        .then(allPets => {
            //get a random index number from index 0 up to but not including the allQuotes.length
            let randomIdx=Math.floor(Math.random()*allPets.length)

            res.json({results:allPets[randomIdx]})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
    })
}