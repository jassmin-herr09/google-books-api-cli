import minimist from "minimist";
import { help } from './help';
import { version } from './version';
import {search} from './search';

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