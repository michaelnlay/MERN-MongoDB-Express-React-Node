const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema(
  {
    petName: {
      type: String,
      required: [true, "Pet name is required"],
      minlength: [3, "Pet name must be at least 3 characters"],
    },
    petType: {
      type: String,
      required: [true, "Pet type is required"],
      minlength: [3, "Pet type must be at least 3 characters"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minlength: [3, "Description must be at least 3 characters"],
    },
    skill1: {
      type: String,
      // required: [true, "Description is required"],
      // minlength: [3, "Description must be at least 3 characters"],
    },
    skill2: {
      type: String,
      // required: [true, "Description is required"],
      // minlength: [3, "Description must be at least 3 characters"],
    },
    skill3: {
      type: String,
      // required: [true, "Description is required"],
      // minlength: [3, "Description must be at least 3 characters"],
    }

  },
  { timestamps: true }
);

const Pet = mongoose.model("Pet", PetSchema); //DB table will save as Pet

module.exports = Pet;
