


# API Documentation

1. Inserting Books : POST: http://localhost:3000/api/create-book
2. Verify whether a book is available/no : GET: http://localhost:3000/api/book/<<name-of-book>>
3. Getting all Books : GET: http://localhost:3000/api/books/all
4. Getting all the Books for a particular author : GET: http://localhost:3000/api/books/author/<<author-name>>
5. Deleting a particular Book : DELETE: http://localhost:3000/api/books/book/<<book-id>>
6. Deleting all the books of a particular author : DELETE: http://localhost:3000/api/books/author/<<author-name>>
7. Updating the book details : POST : http://localhost:3000/api/books/update/<<book-id>>


/* 1 */
{
    "_id" : ObjectId("6256ab531f9a99d18577a70d"),
    "book_title" : "Don Quixote",
    "author" : "Miguel de Cervantes",
    "language" : "English",
    "brief_description" : "Often referred to as the first modern European novel, Don Quixote follows the exploits of the titular noble who becomes obsessed with the romantic notion of chivalry.",
    "__v" : 0
}

/* 2 */
{
    "_id" : ObjectId("625578b1f3650ba15e726cb1"),
    "book_title" : "The Guide",
    "author" : "R.K Narayanan",
    "language" : "English",
    "brief_description" : " The novel is based on Malgudi, the fictional town in South India",
    "__v" : 0
}

/* 3 */
{
    "_id" : ObjectId("625590cd0e8340343b95d254"),
    "book_title" : "The God of Small Things",
    "author" : "Arundhati Roy",
    "language" : "English",
    "brief_description" : "Childhood experiences of fraternal twins Esthappen and Rahel",
    "__v" : 0
}