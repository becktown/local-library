function getTotalBooksCount(books) {
  return books.length;
 }

 function getTotalAccountsCount(accounts) {
  return accounts.length;
 }

function getBooksBorrowedCount(books) {
  return books.reduce((borrowCount, { borrows }) => {
    const mostRecent = borrows[0];
    if (!mostRecent.returned) borrowCount++;
    return borrowCount;
  }, 0);
}

 function getMostCommonGenres(books) {
  let map = {};
  books.forEach((num) => {
   if (map[num.genre]) {
    map[num.genre]++;
   } else {
    map[num.genre] = 1;
   }
  });
  return Object.entries(map)
   .map(([name, count]) => {
    return {
     name,
     count
    };
   })
   .sort((a, b) => b.count - a.count)
   .slice(0, 5);
 }

 function getMostPopularBooks(books) {
  return books
   .map((book) => {
    return { name: book.title, count: book.borrows.length };
   })
   .sort((a, b) => (a.count < b.count ? 1 : -1))
   .slice(0, 5);
 }

 function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
   let popAuthor = {
    name: `${author.name.first} ${author.name.last}`,
    count: 0
   };
   books.forEach((book) => {
    if (book.authorId === author.id) {
     popAuthor.count += book.borrows.length;
    }
   });
   result.push(popAuthor);
  });
  return result.sort((a, b) => b.count - a.count).slice(0, 5);
 }

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
