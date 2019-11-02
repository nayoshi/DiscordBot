# Lancelot
Discord bot created to serve the KnightHacks discord. Feel free to join us [Here!](https://discord.gg/C4cuHFS) 

## Setup
1. Clone this repository on your environment.
2. Install the latest nodejs and npm.
3. Visit the directory and run `npm install`
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
2. Read over your comments and variable names and check for spelling errors.
3. Check for compilation errors.

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
