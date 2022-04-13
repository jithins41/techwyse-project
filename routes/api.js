const express = require('express');
const router = express.Router();

const ApiController = require('../controllers/api-controller');

// Router for create a book with Book Name,author,language and brief description
// Point to createBook method in the ApiController file
router.post('/create-book', ApiController.createBook);

// Router to find a book is available or not
// Point to loadBooksByName method in the ApiController file
router.get('/book/:name', ApiController.loadBooksByName);

// Router to find all books in library
// Point to loadAllBooks method in the ApiController file
router.get('/books/all', ApiController.loadAllBooks);

// Router to find books by author
// Point to loadBooksByAuthor method in the ApiController file
router.get('/books/author/:name', ApiController.loadBooksByAuthor);

// Router to delete a particular book
// Point to processDeleteBook method in the ApiController file
router.delete('/book/:id', ApiController.processDeleteBook);

// Router to delete all books by author
// Point to processDeleteBooksByAuthor method in the ApiController file
router.delete('/books/author/:name', ApiController.processDeleteBooksByAuthor);

// Router to update details of a book
// Point to processDeleteBooksByAuthor method in the ApiController file
router.post('/books/update/:id', ApiController.processUpdateBookDetails);


module.exports = router;