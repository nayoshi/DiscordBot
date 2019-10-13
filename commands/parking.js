// Credit to Space and hacker-alliance for the code

// Installs request necessary for HTTP calls
const request = require('request')

// Installs cherio, needed for JSON data
const cheerio = require('cheerio')

// Installs prefix for arguments
const Prefix = require('prefix')

const URL = 'https://secure.parking.ucf.edu/GarageCount/iframe.aspx'


//UCF Garages Names
const garageNames = ['A', 'B', 'C', 'D', 'H', 'I', 'Libra']

//Number of Garage Spots Available
var garageAvail = {};

//Weekdays
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

//Timestamp of Current Time to allow insert of correct time even if database insert is delayed
const timeStamp = new Date();



module.exports = async function (command) 
{
    
    // Grabs arguments and removes the command from the list
    const args = command.message.content.slice(Prefix.length).trim().split(/ +/g)
    const commandExclusion = args.shift().toLowerCase()

    // Gets the data of available garages from web page
    request(URL, (function (error, response, body) 
    {
        const $ = cheerio.load(body);
        //Garages Are Stored in Strong Elements
        //For Each Strong Element
        $('strong').each(function(i, elem)
        {
            //Get Garage Load
            garageAvail[i] = parseInt($(this).text());
        })
    }))
    // Required garages
    switch(args[0])
    {
        case 'A':
            await command.message.channel.send("Garage A: " + garageAvail[0] + " out of 1623 spaces available")
            break
        
         case 'a':
            await command.message.channel.send("Garage A: " + garageAvail[0] + " out of 1623 spaces available")
            break

        case 'B':
            await command.message.channel.send("Garage B: " + garageAvail[1] + " out of 1259 spaces available")
            break

        case 'b':
            await command.message.channel.send("Garage B: " + garageAvail[1] + " out of 1259 spaces available")
            break
        
        case 'C':
            await command.message.channel.send("Garage C: " + garageAvail[2] + " out of 1852 spaces available")
            break

        case 'c':
            await command.message.channel.send("Garage C: " + garageAvail[2] + " out of 1852 spaces available")
            break

        case 'D':
            await command.message.channel.send("Garage D: " + garageAvail[3] + " out of 1241 spaces available")
            break
        
        case 'd':
            await command.message.channel.send("Garage D: " + garageAvail[3] + " out of 1241 spaces available")
            break

        case 'H':
            await command.message.channel.send("Garage H: " + garageAvail[4] + " out of 1284 spaces available")
            break

        case 'h':
            await command.message.channel.send("Garage H: " + garageAvail[4] + " out of 1284 spaces available")
            break
        
        case 'I':
            await command.message.channel.send("Garage I: " + garageAvail[5] + " out of 1231 spaces available")
            break

        case 'i':
            await command.message.channel.send("Garage I: " + garageAvail[5] + " out of 1231 spaces available")
            break
        
        case 'Libra':
            await command.message.channel.send("Garage Libra: " + garageAvail[6] + " out of 1007 spaces available")
            break

        case 'libra':
            await command.message.channel.send("Garage Libra: " + garageAvail[6] + " out of 1007 spaces available")
            break
    
        default:
            await command.message.channel.send("Please select a garage")
    }
}

// Allows the bot all permissions
module.exports.permission = ''

module.exports.use = ''

// Sets the description of the command
module.exports.description = 'Shows the amount of spaces in a garage'