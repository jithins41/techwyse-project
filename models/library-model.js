const { Schema, model } = require('mongoose');

const LibrarySchema = new Schema({
    book_title: String,
    author: String,
    language: String,
    brief_description: String,
});

module.exports = model('Library', LibrarySchema);