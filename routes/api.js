const express = require('express');
const router = express.Router();

const ApiController = require('../controllers/api-controller');

// Router for create a book with Book Name,author,language and brief description
// Point to createBook method in the ApiController file
router.post('/create-book', ApiController.createBook);

router.get('/book/:name', ApiController.loadBooksByName);

router.get('/books/all', ApiController.loadAllBooks);

router.get('/books/author/:name', ApiController.loadBooksByAuthor);

router.delete('/book/:id');

router.delete('/books/author/:name');

router.put('/books/update/:id');


module.exports = router;