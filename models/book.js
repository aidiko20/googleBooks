const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: {type: String},
  authors: { type: String, required: true },
  description: String,
  image: {type: Array, required: true},
  link: {type: String, required: true, unique: true},
  googleIf: { type: String, required: true, unique: true}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
