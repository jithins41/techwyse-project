const express=require('express');
const router=express.Router();

const ApiController = require('../controllers/api-controller');

// Router for create a book with Book Name,author,language and brief description
// Point to createBook method in the ApiController file
router.post('/create-book',ApiController.createBook);





module.exports = router;