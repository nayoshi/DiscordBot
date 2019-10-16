// Installs request necessary for HTTP calls
const request = require('request')

// Installs cherio, needed for JSON data
const cheerio = require('cheerio')

// Installs prefix for arguments
const Prefix = require('prefix')
URL = 'https://zenith110.github.io/ucfFootballSite/'
var gameDates = {}
var gameNames = {}
var gameScores = {}
var gameBroadcasted = {}
module.exports = async function (command) 
{
    
    const args = command.message.content.slice(Prefix.length).trim().split(/ +/g)
    const commandExclusion = args.shift().toLowerCase()

    // Gets the data of available garages from web page
    request(URL, (function (error, response, body) 
    {
        const $ = cheerio.load(body);
        //Garages Are Stored in Strong Elements
        //For Each Strong Element
        $('#gameDate').each(function(i, elem)
        {
            //Get date game was played
            gameDates[i] = ($(this).text());
            //console.log(gameDates[i])
        })

        $('#gameName').each(function(i, elem)
        {
            //Get school/conference champship ship name
            gameNames[i] = ($(this).text());
            //console.log(gameNames[i])
        })

        $('#gameScore').each(function(i, elem)
        {
            //Get specificed gameScore data
            gameScores[i] = parseInt($(this).text());
        })

        $('#gameBrodcasted').each(function(i, elem)
        {
            //Get game brodcast strings
            gameBroadcasted[i] = ($(this).text());
        })
    }))
    console.log(gameScores[0])
    switch(args[0])
    {
        case '1':
                await command.message.channel.send("Played on " + gameDates[0] + " against " + gameNames[0] + " , score was: " + gameScores[0] + ". " + gameBroadcasted[0])
    }
}

// Allows the bot all permissions
module.exports.permission = ''

module.exports.use = ''

// Sets the description of the command
module.exports.description = 'Shows UCF football data'