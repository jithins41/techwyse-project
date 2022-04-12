const Library = require('../models/library-model');

module.exports.createBook = (req, res, next) => {
    let bookDetails = req.body;
    console.log('Book Details', bookDetails);
}