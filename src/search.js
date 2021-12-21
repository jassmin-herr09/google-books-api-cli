import axios from 'axios';

export async function search (keyword) {

  try {

    const results = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${keyword}&printType=books&startIndex=0&maxResults=5&projection=lite`
    );

    console.log(results);
  } catch (error) {
    if (error.message === 'Request failed with status code 503') {
      throw new Error(
        "Sorry, there's been a problem. It's likely that you have used a keyword that could not be found on the Google Books API. database. Please try again."
      );
    }
    console.error(error);
    return error;
  }
};
