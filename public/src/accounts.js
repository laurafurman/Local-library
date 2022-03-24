function findAccountById(accounts, id) {
  const foundId = accounts.find((account) => account.id === id);
  return foundId;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => accountA.name.last < accountB.name.last ? -1 : 1 );
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  const accountBorrows = books.filter((book) => {
    for (let i = 0; i < book.borrows.length; i++) {
      let borrowId = book.borrows[i].id;
      if (borrowId === account.id) {
        return book.borrows[i].id;
      }
  }})
  return accountBorrows.length;
}

function getBooksPossessedByAccount(account, books, authors) {
  const filteredBooks = filterByAccount(account, books);
  const foundAuthor = authors.find((author) => {
    if (author.id === filteredBooks.authorId) {
      return author;
    }
  })
  const author = {author: foundAuthor};
  combined = [{ ...filteredBooks, ...author }];
  return combined;
}

function checkedOutBooks(books) {
  const status = books.map((book) => {
     if (book.borrows[0]);
    return book;
  })
  return status;
}

function filterByAccount(account, books) {
  const currentStatus = checkedOutBooks(books);
  const filteredResult = currentStatus.find((book) => {
    if (book.borrows[0].id === account.id) {
      return book;
    }
  } 
  )
  return filteredResult;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
