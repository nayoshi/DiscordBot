// Written by Abrahan Nevarez for KnightHacks@UCF
// displays current UCF football data include schedule, stats, as well as last game won and lost.

// Installs request necessary for HTTP calls
const request = require('request')

// Installs cherio, needed for JSON data
const cheerio = require('cheerio')

// Installs prefix for arguments
const Prefix = require('prefix')
URL = 'https://zenith110.github.io/ucfFootballSite/'

module.exports = async function (command) 
{
    const args = command.message.content.slice(Prefix.length).trim().split(/ +/g)
    const commandExclusion = args.shift().toLowerCase()
    
    // Local variables for these arrays
    var gameDates = []
    var gameNames = []
    var gameScores = []
    var gameBroadcasted = []
    var overallData = []
    var wonGameDate = []
    var wonGameEvent = []
    var wonGameScore = []
    var lostGameDate = []
    var lostGameEvent = []
    var lostGameScore = []

    // Gets the data of available football stats from web page
    // Keep commands in request loop, otherwise the data will not be fetched.
    request(URL, (function (error, response, body) 
    {
        const $ = cheerio.load(body);
        
        // Gets http calls using p id and span id identifiers
        $('#gameDate').each(function(i, elem)
        {
            // Get date game was played
            gameDates[i] = ($(this).text());
        })
        
        $('#gameName').each(function(i, elem)
        {
            // Get school/conference champshionship name
            gameNames[i] = ($(this).text());
        })

        $('#gameScore').each(function(i, elem)
        {
            //Get specificed game score data
            gameScores[i] = ($(this).text());
        })

        $('#gameBrodcasted').each(function(i, elem)
        {
            //Get game brodcast strings
            gameBroadcasted[i] = ($(this).text());
        })

        $('#overallData').each(function(i, elem)
        {
            //Get overall data of the team
            overallData[i] = ($(this).text());
        })

        $('#wonGameDate').each(function(i, elem)
        {
            //Get overall data of the team
            wonGameDate[i] = ($(this).text());
            
        })

        $('#wonGameEvent').each(function(i, elem)
        {
            //Get overall data of the team
            wonGameEvent[i] = ($(this).text());
            
        })

        $('#wonGameScore').each(function(i, elem)
        {
            //Get overall data of the team
            wonGameScore[i] = ($(this).text());
            
        })

        $('#lostGameDate').each(function(i, elem)
        {
            //Get overall data of the team
            lostGameDate[i] = ($(this).text());
            
        })

        $('#lostGameEvent').each(function(i, elem)
        {
            //Get overall data of the team
            lostGameEvent[i] = ($(this).text());
        })

        $('#lostGameScore').each(function(i, elem)
        {
            //Get overall data of the team
            lostGameScore[i] = ($(this).text());
            
        })

        switch(args[0])
        {
            case '1':
                command.message.channel.send("Played on " + gameDates[0] + " against " + gameNames[0] + 
                " , score was: " + gameScores[0] + ". " + gameBroadcasted[0])
                break;
            
            case '2':
                command.message.channel.send("Played on " + gameDates[1] + " against " + gameNames[1] + 
                " , score was: " + gameScores[1] + ". " + gameBroadcasted[1])
                break;
            
            case '3':
                command.message.channel.send("Played on " + gameDates[2] + " against " + gameNames[2] + 
                " , score was: " + gameScores[2] + ". " + gameBroadcasted[2])
                break;
            
            case '4':
                command.message.channel.send("Played on " + gameDates[3] + " against " + gameNames[3] + 
                " , score was: " + gameScores[3] + ". " + gameBroadcasted[3])
                break;

            case '5':
                command.message.channel.send("Played on " + gameDates[4] + " against " + gameNames[4] + 
                " , score was: " + gameScores[4] + ". " + gameBroadcasted[4])
                break;

            case '6':
                command.message.channel.send("Played on " + gameDates[5] + " against " + gameNames[5] + 
                " , score was: " + gameScores[5] + ". " + gameBroadcasted[5])
                break;

            case '7':
                command.message.channel.send("Played on " + gameDates[6] + " against " + gameNames[6] + 
                " , score was: " + gameScores[6] + ". " + gameBroadcasted[6])
                break;

            case '8':
                command.message.channel.send("Played on " + gameDates[7] + " against " + gameNames[7] + 
                " , score was: " + gameScores[7] + ". " + gameBroadcasted[7])
                break;
            
            case '9':
                command.message.channel.send("Played on " + gameDates[8] + " against " + gameNames[8] + 
                " , score was: " + gameScores[8] + ". " + gameBroadcasted[8])
                break;
            
            case '10':
                command.message.channel.send("Played on " + gameDates[9] + " against " + gameNames[9] + 
                " , score was: " + gameScores[9] + ". " + gameBroadcasted[9])
                break;

            case '11':
                command.message.channel.send("Played on " + gameDates[10] + " against " + gameNames[10] + 
                " , score was: " + gameScores[10] + ". " + gameBroadcasted[10])
                break;

            case '12':
                command.message.channel.send("Played on " + gameDates[11] + " against " + gameNames[11] + 
                " , score was: " + gameScores[11] + ". " + gameBroadcasted[11])
                break;

            case '13':
                command.message.channel.send("Played on " + gameDates[12] + ", is the " + gameNames[12] + 
                " , score was: " + gameScores[12] + ". " + gameBroadcasted[12])
                break;

            case 'help':
                command.message.channel.send("```1 - 13 for games\noverall for total score of overall schedule" + 
                "\nhome for home wins\naway for away wins\nconference for conference wins\nlgw for last game won" + 
                "\nlgl for last game lost\nData taken from https://zenith110.github.io/ucfFootballSite/```")
                break;

            case 'home':
                command.message.channel.send("UCF is currently " + overallData[4] + " in home games")
                break;

            case 'away':
                command.message.channel.send("UCF is currently " + overallData[5] + " in away games")
                break;

            case 'conference':
                command.message.channel.send("UCF is currently " + overallData[2] + " in conference games")
                break;

            case 'overall':
                command.message.channel.send("Ucf is currently " + overallData[0])
                break;

            case 'lgw':
                command.message.channel.send("UCF last won on " + wonGameDate.splice(-1)[0] 
                + " against " + wonGameEvent.splice(-1)[0] + 
                " with a score of " + wonGameScore.splice(-1)[0])
                break;
            
            case 'lgl':
                command.message.channel.send("UCF last lost on " + lostGameDate.splice(-1)[0] 
                + " against " + lostGameEvent.splice(-1)[0] + 
                " with a score of " + lostGameScore.splice(-1)[0])
                break;

            default:
                command.message.channel.send("Please pick a command, if help needed, use the help command.")
                break;
        }
    }))
}

// Allows the bot all permissions
module.exports.permission = ''

module.exports.use = ''

// Sets the description of the command
module.exports.description = 'Shows UCF football data'