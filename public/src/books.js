function findAuthorById(authors, id) {
  const foundAuthorId = authors.find((author) => author.id === id);
  return foundAuthorId
}

function findBookById(books, id) {
  const foundBookId = books.find((book) => book.id === id);
  return foundBookId
}

function partitionBooksByBorrowedStatus(books) {
  const borrowed = filterBorrowed(books)
  const returned = filterReturned(books)
  const combined = [borrowed, returned]
  return combined
}

function filterBorrowed(books) {
  const borrowed = books.filter((book) => (!book.borrows[0].returned)) 
   return borrowed
}

function filterReturned(books) {
  const returned = books.filter((book) => (book.borrows[0].returned)) 
   return returned
}

function getBorrowersForBook(book, accounts) {
  let filteredAccounts = filterBorrowers(book, accounts)
  while (filteredAccounts.length > 10) {
    filteredAccounts.pop()
  }
  return filteredAccounts
}
//while loop

function filterBorrowers({ borrows }, accounts ) {
  let array = []
  for (let account in accounts) {
    const accountId = accounts[account]
    for (let i = 0; i < borrows.length; i++) {
      if (accountId.id === borrows[i].id){
        const id = borrows[i]
        let modifiedAccount = {...accountId, ...id}
        array.push(modifiedAccount)
      }
    }
  }  
  return array
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
