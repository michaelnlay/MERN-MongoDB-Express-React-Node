const mongoose = require('mongoose');


//purpose of this file is to describe how our quotes table (collection) should look like
//instructions for what the quotes table should look like below
const QuoteSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "Content is required"], //for validation
        minlength:[5, "Content must be at least 5 characters!"]
    },
    
    author: {
        type: String,
        require: [true, "Author is required"],
        minlength:[2, "Author name must be at least 2 characters"]
    },
    rating: {
        type: Number,
        min: [1, "Rating can't be less than 1"],
        max:[10, "Rating can't be more than 10"]
    }  
}, { timestamps: true })

const Quote = mongoose.model('Quote', QuoteSchema) //'Quote' is the name of the table

module.exports = Quote;