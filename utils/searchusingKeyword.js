const axios = require('axios');

module.exports = async keyword => {
    try{
      if(!keyword || keyword === undefined || (keyword === true && keyword !== 'true')
       ){
        throw new Error(`
            Your search came back undefined. Please try again. `)
       }
       const results = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${keyword}&printType=books&startIndex=0&maxResults=5&projection=lite`
       );
       return results;
    }catch(error) {
        if (error.message === 'The request failed with a 503.') {
         throw new Error(
            "Sorry, there's been a problem. It's likely that you have used a keyword that could not be found on the Google Books API database. Please try again."
         );
        }
        console.error(error);
        return error;
    }
};