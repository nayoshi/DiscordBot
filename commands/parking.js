// Credit to Space and hacker-alliance for the code

// Written by Abrahan Nevarez for KnightHacks@UCF
// Displays parking data with percentages full 

// Installs request necessary for HTTP calls
const request = require('request')

// Installs cherio, needed for JSON data
const cheerio = require('cheerio')

// Installs prefix for arguments
const Prefix = require('prefix')

const URL = 'https://secure.parking.ucf.edu/GarageCount/iframe.aspx'

//Number of Garage Spots Available
var garageAvail = {};

module.exports = async function (command) 
{
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
    
    command.message.channel.send
    ("```Garage A: " + garageAvail[0] + " out of 1623 spaces available " 
    + (Math.round((((1623 - garageAvail[0])/1623) * Math.pow(100, 1)))) +  "% full " + 

    "\nGarage B: " + garageAvail[1] + " out of 1259 spaces available "  
    + (Math.round((((1259 - garageAvail[1])/1259) * Math.pow(100, 1)))) +  "% full " + 

    "\nGarage C: " + garageAvail[2] + " out of 1852 spaces available " 
    + (Math.round((((1852 - garageAvail[2])/1852) * Math.pow(100, 1)))) +  "% full " + 

    "\nGarage D: " + garageAvail[3] + " out of 1241 spaces available " 
    + (Math.round((((1241 - garageAvail[3])/1241) * Math.pow(100, 1)))) +  "% full " +

    "\nGarage H: " + garageAvail[4] + " out of 1284 spaces available " 
    + (Math.round((((1284 - garageAvail[4])/1284) * Math.pow(100, 1)))) +  "% full " + 

    "\nGarage I: " + garageAvail[5] + " out of 1231 spaces available "  
    + (Math.round((((1231 - garageAvail[5])/1231) * Math.pow(100, 1)))) +  "% full " + 

    "\nGarage Libra: " + garageAvail[6] + " out of 1007 spaces available " 
    + (Math.round((((1007 - garageAvail[6])/1007) * Math.pow(100, 1)))) +  "% full```")
    }))
}

// Allows the bot all permissions
module.exports.permission = ''

module.exports.use = ''

// Sets the description of the command
module.exports.description = 'Shows the amount of spaces in a garage'