function findAuthorById(authors, id) {
  let foundAuthor = authors.find((author) => author.id === id);
  return foundAuthor;
 }

 function findBookById(books, id) {
  let foundBook = books.find((book) => book.id === id);
  return foundBook;
 }

 function partitionBooksByBorrowedStatus(books) {
  let booksReturned = books.filter((book) =>
   book.borrows.every((borrow) => borrow.returned === true)
  );
     let booksOut = books.filter((book) =>
  book.borrows.some((borrow) => borrow.returned === false)
 );
     let finalArray = [[...booksOut], [...booksReturned]];
 return finalArray;
}

function getBorrowersForBook(book, accounts) {
  return book.borrows
   .map((borrow) => {
    let account = accounts.find((account) => account.id === borrow.id);
    return { ...borrow, ...account };
   })
   .slice(0, 10);
 }

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
