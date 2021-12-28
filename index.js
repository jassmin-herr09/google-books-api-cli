const minimist = require('minimist');
const {version} = require('./package.json');



module.exports = () => {
    
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
        require('./cmds/version')(args, version);
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
