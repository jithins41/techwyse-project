const { Schema, model } = require('mongoose');

const LibrarySchema = new Schema({
    book_title: { type: String },
    author: String,
    language: String,
    brief_description: String,
});
LibrarySchema.index({ book_title: 'text' });
module.exports = model('Library', LibrarySchema);