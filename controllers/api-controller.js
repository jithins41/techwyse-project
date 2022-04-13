const consoleHelpers = require('../helpers/console-helpers');
const Library = require('../models/library-model');


module.exports.createBook = (req, res, next) => {
    let bookDetails = req.body;
    // console.log('Book Details', bookDetails);
    const library = new Library(bookDetails);
    library.save().then(() => {
        res.json({ status: true, message: 'Book created succesfully' });
    }).catch(error => {
        res.status(500).json(error);
    })
}

module.exports.loadAllBooks = (req, res, next) => {
    Library.find({}, { _id: 0, __v: 0 }).exec().then((books) => {
        res.json(books);
    }).catch(error => {
        res.status(500).json(error);
    })
}
module.exports.loadBooksByAuthor = (req, res, next) => {
    Library.find({ author: req.params.name }).then((response) => {
        res.json(response);
    }).catch(error => {
        res.status(500).json(error);
    })
}
module.exports.loadBooksByName = (req, res, next) => {
    Library.find({ $text: { $search: req.params.name } }).then((response) => {
        if (response.length > 0) {
            res.json({ available: true, books: response });
        }
        else {
            res.json({ available: false });
        }
    }).catch(error => {
        res.status(500).json(error);
    })
}


module.exports.processDeleteBook = (req, res, next) => {
    Library.findByIdAndDelete(req.params.id).then((response) => {
        res.json({ status: true, message: "Book deleted succesfully", book: response });
    }).catch(error => {
        res.status(500).json({ error });
    })
}

module.exports.processDeleteBooksByAuthor = (req, res, next) => {
    Library.deleteMany({ author: req.params.name }).then((response) => {
        res.json({ status: true, message: `All boks with author ${req.params.name} deleted`, bdetails: response });
    }).catch(error => {
        res.status(500).json(error);
    })
}

module.exports.processUpdateBookDetails = (req, res, next) => {
    Library.findByIdAndUpdate(req.params.id, { ...req.body }).then((response) => {
        res.json({ status: true, message: "Book details updated succesfully", details: response });
    }).catch(error => {
        console.log(error)
        // res.status(500).json(error);
    })
}