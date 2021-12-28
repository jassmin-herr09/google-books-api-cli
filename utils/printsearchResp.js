const errorHandling = require('./errorHandling');

module.exports = (keyword, books) => {
   try {
       console.log(`You searched for: "${keyword}"
       Here are 5 books that are related to your search Keyword.   
       `
       );
       books.data.items.forEach(book => {
         console.log(`
           Title: ${book.volumeInfo.title}
           Author: ${book.volumeInfo.authors}
           Publishr: ${book.volumeInfo.publisher}
           ID: ${book.id}
          `); 
       });
       return;
    } catch(error){
      errorHandling(error);
    }
};