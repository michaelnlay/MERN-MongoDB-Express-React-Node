const mongoose = require("mongoose");

const NinjaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name ust be at least 2 characters"]
    },
    numProjects: {
        type:Number,
        required: [true, "Number of projects is requried"],
        min:[0, "You can't have less than 0 projects"]
    },
    gradDate: {
        type: Date,
        required:[true, "Date is required"],
        min:['2012-01-01',"Date can't be before 2012"]
    },
    //if you want a optional field, you don't need the required part. Just the type.
    isVeteran: {
        type: Boolean
    }

}, { timestamps: true })

const Ninja = mongoose.model("Ninja", NinjaSchema) //DB table will save as Ninja

module.exports = Ninja;