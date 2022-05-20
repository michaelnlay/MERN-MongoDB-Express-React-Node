const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: [true, "Author name is required"],
      minlength: [3, "Author name must be at least 3 characters"],
    },
  },
  { timestamps: true }
);

const Author = mongoose.model("Author", AuthorSchema); //DB table will save as Author

module.exports = Author;
