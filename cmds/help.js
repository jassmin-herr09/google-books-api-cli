
const menus = {
    main:`
     Welcome to the main menu! 

     8th-google-cli [command] <options>

     search.......... search Google API for a book using a keyword. Please use --keyword flag then followed by actual search word.
     save..........save a book to a reading list. 
     list   .............. show the reading list.
     version ............ show current package version.
     help............... show the help menu for a command.`,

     search: `
       8th-google-cli search <options>
       --keyword.......... the actual keyword you would like to serach`,

     save: `
     8th-google-cli save <options>
      --id .......... the ID of the book to add to your reading list. 
     ` 
};


module.expoerts = args => {
    const subCmd = args._[0] === 'help'
      ? args._[1]
      : args._[0]
    console.log(menus[subCmd] || menus.main)
  };