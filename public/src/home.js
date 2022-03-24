function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let checkedOut = checkedOutBooks(books);
  let count = 0
  for (let i = 0; i < checkedOut.length; i++) {
    if (!checkedOut[i]) {
      count++
    }
  }
  return count
}

function checkedOutBooks(books) {
  const status = books.map((book) => {
     if (book.borrows[0])
    return book.borrows[0].returned
  })
  return status
}

function getMostCommonGenres(books) {
  let genres = books.reduce((result, book) => {
    if (result[book.genre]) {
      result[book.genre].count++
    } else {
      result[book.genre] = { name: book.genre, count: 1 }}
    return result
  }, {})
  return Object.keys(genres)
    .map(genre => genres[genre])
    .sort((a,b) => b.count - a.count)
    .slice(0,5)
}

function getMostPopularBooks(books) {
  let items = []
  let item = {}
  books.forEach(book => {
    const bookTitle = book.title
    const borrowAmount = book.borrows.length
    item = {name: bookTitle, count: borrowAmount}
    items.push(item)
  });
  items.sort((itemA, itemB) => (itemA.count < itemB.count ? 1 : -1))
  while (items.length > 5) {
    items.pop()
  } 
  return items
}

function getMostPopularAuthors(books, authors) {
  let bookAuthors = authors.reduce((result, author) => {
    const authorName = `${author.name.first} ${author.name.last}`;
    if (result[authorName]) {
      books.forEach(book => {
        result[authorName].count += book.borrow.length
      })
    } else {
        books.forEach(book => {
          if(book.authorId === author.id) {
           result[authorName] = { name: authorName, count: book.borrows.length }}
         }
        )
      }
    return result
  }, {})
  return Object.keys(bookAuthors)
    .map(author => bookAuthors[author])
    .sort((a,b) => b.count - a.count)
    .slice(0,5)
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
