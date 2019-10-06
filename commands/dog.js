// Scrapes through instagram for some wholesome doggo pics
// Uses a dictionary object to check for dogs

const {Builder, By, Key, Until} = require('selenium-webdriver');
const Request = require('request-promise');
const Prefix = require('prefix');
const Axios = require("axios");
const Path = require('path');
const Fs = require('fs');
var dogs =
    {
        "doggo":
        {
            "Species":
            [
                "German-Shepard",
                "Golden-Retriever",
                "Shiba-Inu",
                "Siberian-Husky",
                "Labador-Retriver",
            ]
        }
    }

async function helpDoggo(command, dogName)
{
    var i;
    command.message.channel.send("The current dogs on the list are: ");
        try
        {
            // Loops through all the dogs till the end
            for(i = 0; i < dogs.doggo.Species.length; i++)
            {
                command.message.channel.send(dogs.doggo.Species[i]);
            }
        }
        catch(error)
        {
            command.message.channel.send("Error " + error);
        }     
}

// Displays the dog's picture
async function displayImage(command, dogName, imageURL, dogPicFolder)
{
    command.message.channel.send("Lancelot providing you with wholesome " + dogName + " pictures", {files: ["../DiscordBot/dogpics/doggopic.jpg"]});
    console.log("Done with finding " + dogName);
}
// Saves the pic
function savePic(command, dogName, imageURL, dogPicFolder)
{
    Fs.writeFile(dogPicFolder + "71186765_543713426381246_4836062711434755404_n.jpg", imageURL);
}
async function driverSearch(command, dogName)
{
    // Builds selenium
    let driver = new Builder().forBrowser('chrome').build()
    // Stores an address for dog pics
    var dogPicFolder = "../dogpics/";
    // Does the webscraping itself
    await driver.get("https://google.com");
    await driver.findElement(By.name("q")).sendKeys(dogName + " instagram", Key.RETURN);

    // Clicks onto the first link
    await driver.findElement(By.css("h3")).click();

    // Clicks on a picture that we'll grab
    try
    {
        await driver.findElement(By.xpath("//*[@id='react-root']/section/main/article/div[1]/div/div/div[1]/div[1]")).click();
    }
    catch(error)
    {
        console.log("Error: " + error + "\nMore then likely didn't touch an image")
    }
    var imageURL = 'https://scontent-mia3-1.cdninstagram.com/vp/afb5a14366baa1a2564656732f9e7884/5E3B84A8/t51.2885-15/e35/s1080x1080/71186765_543713426381246_4836062711434755404_n.jpg?_nc_ht=scontent-mia3-1.cdninstagram.com&_nc_cat=102'
    console.log(imageURL);
    displayImage(command, dogName, imageURL, dogPicFolder);   
}
// Checks the name passed to see if it matches any of the dogs in the dictionary
async function dogCheck(command, dogName)
{
    var i;
    for(i = 0; i < dogs.doggo.Species.length; i++)
    {

    }
    // Moves onto the meats and the potatos of the program
    driverSearch(command, dogName);
}
module.exports = async function (command) 
{
    // Grabs arguments and removes the command from the list
    const args = command.message.content.slice(Prefix.length).trim().split(/ +/g);
    const commandExclusion = args.shift().toLowerCase();
    
    // Grabs the names for the dogs
    switch(args[0])
    {
        case "help":
            helpDoggo(command, args[0]);
            break;
        case "Shiba-Inu":
           driverSearch(command, args[0]);
           break;

        default:
            command.message.channel.send("Currently, only Shiba-Inus are supported\nWe are fixing this issue however!\n");
            break;
    }

}

// Allows the bot all permissions
module.exports.permission = ''

module.exports.use = ''

// Sets the description of the command
module.exports.description = 'Grabs a image of a dog of your own choosing'