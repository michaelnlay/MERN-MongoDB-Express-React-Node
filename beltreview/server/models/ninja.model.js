const mongoose = require("mongoose");

const NinjaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [12, "Name ust be at least 2 characters"]
    },
    numProjects: {
        type:Number,
        required: [true, "Name is requried"],
        min:[0, "You can't have less than 0 projects"]
    },
    gradDate: {
        type: Date,
        required:[true, "Date is required"],
        min:['2012-0101',"Date can't be before 2012"]
    },
    //if you want a optional field, you don't need the required part. Just the type.
    isVerteran: {
        type: Boolean
    }

},{timestamps:true})