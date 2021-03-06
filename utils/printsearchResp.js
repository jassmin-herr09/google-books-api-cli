const errorHandling = require("./errorHandling");

module.exports = (keyword, books) => {
  try {
    console.log(`
       Hello, Book Searcher! 
       You searched for: "${keyword}"
       Here are 5 books from the Google Books API, that are related to your search Keyword.   
       `);
    books.data.items.forEach((book) => {
      console.log(`
           Title: ${book.volumeInfo.title}
           Author(s): ${book.volumeInfo.authors}
           Publisher: ${book.volumeInfo.publisher}
           ID: ${book.id}
          `);
    });
    return;
  } catch (error) {
    errorHandling(error);
  }
};
