# GOOGLE BOOKS API CLI by Jassmin Herrera

\*\* As of 12/27/21 Edits have been made to this ReadMe to implement feedback.

- 12/29/21 Edit on ReadMe on folder name on Step #1

A command line application that allows you to use the Google Books API to search for books utilizing a keyword from the user, and returning 5 books related to the keyword along with the Author(s), Title, and Publisher.

# Getting started

Before following steps 1-5, it is necessary to have Node already installed, some understanding of the Command line, and Javascript.

1. Open up your terminal and clone this repository in a location of your preference.

2. Navigate or cd into the folder google-books-api-cli

3. Install the project dependencies by running `npm i` from within the google-books-api-cli folder. Please refer to the 'Dependencies' section below. The dependencies can also be used with Yarn, but for my project I used npm.

4. Additionally, in order to make the local npm package (the 8th-google-cli App) to be globally available in our workstation, we run a command, `npm link` . This step allows us to run the command at any location from the command line.

5. Open the command line app by entering the command $ 8th-google-cli help into the terminal. You will be able to see a main menu with the commands.

## ERROR HANDLING AT SET UP

- Errors such as, 'permission denied' please type `sudo` followed by the command.

### DEPENDENCIES

Here are the project dependencies used. Please click on the name of the dependency to redirect you to the dependency documentation.

## [axios](https://www.npmjs.com/package/axios)

-Promise based HTTP client for the browser and node.js

`npm install axios`

### [Minimist](https://www.npmjs.com/package/minimist)

`npm install minimist`

- This module is the guts of optimist's argument parser without all the fanciful decoration.

## [Jest](https://jestjs.io/docs/getting-started)

- Javascript Testing

## [@babel/plugin-proposal-class-properties](https://www.npmjs.com/package/@babel/plugin-proposal-class-properties)

`npm install --save-dev @babel/plugin-proposal-class-properties`

## Google API and KEY

A .env file was created along with a .gitignore. This was created as a means not to commit the API KEY/URL. The API key and the API URL were placed inside the .env file. It is not necessary for the user to configure an API key.

# Commands

## Version Command

$ 8th-google-cli version or $ 8th-google-cli -v for the version

## Help Command

$ 8th-google-cli help or $ 8th-google-cli -h for the version

## Search Command

$ 8th-google-cli search --keyword `user keyword here`

- example: $ 8th-google-cli search --keyword cat

# Testing

Jest was used to create our tests.

In order to run our tests, it is necessary to install Jest as a dev dependency using `npm i --save-dev jest` and inside our terminal run the following command: `npm test`

# Code Formatter

A prettier rc file was used to format code.

## Screenshot of App

![CLI](screenshot.jpg)

## Stretch Goals and Challenges

-create a reading list where a user can save their book.
-create more tests for the command.
