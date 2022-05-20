const Product = require('../models/product.model');//import the model so that the controller know how to talk to the db to query the db

module.exports.sayHello = (req, res) => {
    res.json({msg:"Hello, Will this be Product API"})
}

//Find all products
module.exports.findAllProducts = (req,res) => {
    Product.find()
        .then(allProducts => {
            res.json({results:allProducts})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
    })
}    

//Create a product
module.exports.createProduct = (req, res) => {
    //req.body represents form information
    Product.create(req.body)
        .then(newlyCreateProduct => {
        res.json({results:newlyCreateProduct})
    })
    .catch(err => {
        res.json({ msg: "Something went wrong", error: err })
})
    
}

//Find one product
module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(foundProduct => {
            res.json({results:foundProduct})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}

//Update a product
module.exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate({ _id: req.params.id },//specify which products to update by id
        req.body,
    {new:true,runValidators:true}) //specify the form information to update the product
        .then(updateProduct => {
            res.json({results:updateProduct})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}

//Delete a product
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(deleteProduct => {
            res.json({results:deleteProduct})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}

//Random products by index
module.exports.findRandomProduct = (req,res) => {
    Product.find()
        .then(allProducts => {
            //get a random index number from index 0 up to but not including the allQuotes.length
            let randomIdx=Math.floor(Math.random()*allProducts.length)

            res.json({results:allProducts[randomIdx]})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
    })
}