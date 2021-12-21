   
import axios from 'axios';
import chalk from 'chalk';

export function validateApiKey(apiKey) {
  if (!apiKey || apiKey.length !== 32) {
    console.error(
      chalk.redBright(
        `API Key for Google Books has not been set up yet.`
      )
    );
    console.warn( // book config -k={your api key}
      `Please use command ${chalk.greenBright(
        'book config --apiKey'
      )} to save your API key.
        `
    );
    return false;
  }
  return true;
}

export async function queryBook( apiKey) {
    const baseUri = 'https://www.googleapis.com/books/v1/volumes?q=${keyword}&printType=books&startIndex=0&maxResults=5&projection=lite';
    const url = getApiUrl(baseUri,apiKey);
    return await axios({
      method: 'get',
      url: url
    });
  }
