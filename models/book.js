const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, require: true},
    authors: [{ type: String, require: true}],
    description: { type: String, require: true},
    image: { type: String, required: true},
    link: { type: String, required: true}
})

const GoogleBooks = mongoose.model("GoogleBooks", bookSchema);

module.exports = GoogleBooks;