import Conf from 'conf';
import {validateApiKey} from './utils';

//Config file is for validating users’ configuration inputs when making HTTP request & setting API Key.  

//Goal is to search by keyword to return 5 books with the book's author, title, and publishing company., get book ID to save as reading list.

export const configKey = '8th-google-cli';

export async function configure(args) {

  const config = new Conf();
  let currentConfigObject = config.get(configKey);
  currentConfigObject = currentConfigObject || {};

  let apiKey = args.apiKey || args.apikey || args['api-key'] || args.key || args.k;
    if(!apiKey){
        apiKey = currentConfigObject.apiKey;
    }

    if(!validateApiKey(apiKey)){
        return;
    }
}