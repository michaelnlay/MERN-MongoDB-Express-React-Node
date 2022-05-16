const mongoose = require('mongoose');


//purpose of this file is to describe how our jokes table (collection) should look like
//instructions for what the jokes table should look like below
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required"], //for validation
        minlength:[10, "Setup must be at least 10 characters!"]
    },
    
    punchline: {
        type: String,
        require: [true, "Punchline is required"],
        minlength:[3, "Punchline must be at least 3 characters"]
    }
}, { timestamps: true })

const Joke = mongoose.model('Joke', JokeSchema) //'Joke' is the name of the table

module.exports = Joke;