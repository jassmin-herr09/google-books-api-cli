/* 
 -index.js tells Node that our app will use ES6 Modules and gets the cli function to process user inputs.
 - the cli.js file then handles user commands by leveraging the tool minimist. 
 - the tool minimist converts the arguments into an object. 
    - example: my input books search, console.log(argsObj) output ->   { _: [ 'search' ] }
 - each file in src folder for each command.   
*/

import minimist from "minimist";
import { help } from './help';
import { version } from './version';
import {search} from './search';
import { configure } from './configure';

// A list of commands that the CLI app will process along with expected commands : version, help. 
  
/* search
    save
    config
    list
    default */

export async function cli(argsArray) {
    const args = minimist(argsArray.slice(2));
    
    let cmd = args._[0] || 'help';
  
    if (args.version || args.v) {
      cmd = 'version';
    }
  
    if (args.help || args.h) {
      cmd = 'help';
    }
  
    switch (cmd) {
      case 'version':
        version(args);
        break;
  
      case 'help':
        help(args);
        break;
  
      case 'search':
        search(args);
        break;
  
      case 'save':
        save(args);
        break;
  
      case 'config':
        configure(args);
        break;

      case 'list':
        list(args);
        break;
  
      default:
        console.error(`"${cmd}" is not a valid command!`);
        break;
    }
  }