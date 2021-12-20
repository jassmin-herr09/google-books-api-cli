/* 
 -index.js tells Node that our app will use ES6 Modules and gets the cli function to process user inputs.
 - the cli.js file then handles user commands by leveraging the tool minimist. 
 - the tool minimist converts the arguments into an object. 
    - example: my input books search, console.log(argsObj) output ->   { _: [ 'search' ] }
*/


import minimist from "minimist";

export async function cli(args){
    const argsObj = minimist(args.slice(2));
    console.log(argsObj);
}