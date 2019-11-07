# Lancelot
Discord bot created to serve the KnightHacks discord. Feel free to join us [Here!](https://discord.gg/C4cuHFS) 

## Setup
1. Clone this repository on your environment.
2. Install the latest nodejs and npm:
    a. https://nodejs.org/en/
    b. Instructions for Mac: https://treehouse.github.io/installation-guides/mac/node-mac.html
    c. Instructions for Windows: https://www.guru99.com/download-install-node-js.html
    d. Instructions for Linux: https://blog.teamtreehouse.com/install-node-js-npm-linux
3. Visit the project's main directory and run `npm install`
4. Create a `constants/token.json` file and format and insert your discord bot token properly. (Refer to token.json section)
5. Run `npm start` to start the discord bot.

## token.json
The proper formatting for the `token.json` file is this:
```
{
    "token": "INSERT-TOKEN-HERE"
}
```
Place the token.json in the `constants/` directory.

## Pull Request Etiquettte
1. Run your code through ESLint first. (Refer to ESLint section)
2. Read over your comments and variable names and check for speelign erorrs.
3. Check for compilation errors.
4. Make sure your code is consistent with the rest of the project and with other commands (i.e. diceRoll.js, not diceroll.js).

## ESLint
> What is ESLint?

ESLint is a way to create a uniform code base throughout the project. It is beneficial because it allows multiple people to create and work on the project and stick to one coding style.

### Setup (VSCode Users only)
1. Click on `File` > `Preferences` > `Extensions` and install `ESLint` by Dirk Baeumer.
2. Once you restart VSCode, and go back to the project, it will highlight if there is inconsistent coding style.
3. To test, you can copy paste this code. If it highlights red, then it is working.
```console.log ( "hi" )```

### ESLint without VSCode
1. Go to the project's home directory, and run `node_modules/.bin/eslint <file>`.
2. This will guide you to fixing your mistakes.
3. If you are having trouble decoding your coding inconsistency check out:
    > https://requirejs.org/docs/commonjs.html
    
    > https://flaviocopes.com/es6/
    
    > https://docs.npmjs.com/misc/coding-style.html

    Please check at `.eslintrc.js` for more rules that are not standardized by the standards above.


### Troubleshooting
1. If the bot is not starting, try deleting your node_modules folder and your package-lock.json file (both located in the project's main directory), and running npm install again.
2. Feel free to reach out to Lancelot devs on Discord for questions and troubleshooting.
3. Let us know if there's anything that needs to be added to this section!
