const consoleHelpers = require('../helpers/console-helpers');
const Library = require('../models/library-model');


module.exports.createBook = (req, res, next) => {
    let bookDetails = req.body;
    // console.log('Book Details', bookDetails);
    const library = new Library(bookDetails);
    library.save().then(() => {
        res.json({ status: true, message: 'Book created succesfully' });
    }).catch(error => {
        consoleHelpers.log(error);
    })
}

module.exports.loadAllBooks = (req, res, next) => {
    Library.find({}, { _id: 0, __v: 0 }).exec().then((books) => {
        res.json(books);
    })
}
module.exports.loadBooksByAuthor = (req, res, next) => {

}
module.exports.loadBooksByName = (req, res, next) => {
    Library.find({ $text: { $search: req.params.name } }).then((response) => {
        if (response.length > 0) {
            res.json({ available: true, books: response });
        }
        else {
            res.json({ available: false });
        }
    })
}