const mongoose = require("mongoose")

const authorSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    authorId: String
})
const Author = mongoose.model("Author", authorSchema)

module.exports = Author