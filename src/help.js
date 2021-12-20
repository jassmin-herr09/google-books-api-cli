import chalk from 'chalk';

const menus = {
    main:`
    
    ${chalk.greenBright('book [command] <options>')}

    ${chalk.blueBright('search')} ................search Google API for a book using a keyword. 
    ${chalk.blueBright('save')} ........... save a book to a reading list. 
    ${chalk.blueBright('config')}.............. set API key
    ${chalk.blueBright('list')}.............. show the reading list
    ${chalk.blueBright('version')} ............ show package version
    ${chalk.blueBright('help')} ............... show help menu for a command
  `,

}

export async function help(args) {
    const subCmd = args._[0] === 'help'
      ? args._[1]
      : args._[0]
    console.log(menus[subCmd] || menus.main)
  }