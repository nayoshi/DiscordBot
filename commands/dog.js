// Scrapes through instagram for some wholesome doggo pics
// Uses a dictionary object to check for dogs
const {Builder, By, Key, Until} = require('selenium-webdriver');
const request = require('request-promise');
const prefix = require('prefix')
var dogs =
    {
        "doggo":
        {
            "Species":
            [
                "German-Shepard",
                "Golden-Retriever",
                "Shiba-Inu",
                "Siberian-Husky"
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
async function displayImage(command, image)
{
    //command.message.channel.send("Lancelot providing you with wholesome " + dogs.doggo.Species[2] + " pictures", {files: ["commands/dogpic.jpg"]});
}

async function driverSearch(dogName)
{
    // Builds selenium
    let driver = new Builder().forBrowser('chrome').build()
    // Does the webscraping itself
    await driver.get("https://google.com");
    await driver.findElement(By.name("q")).sendKeys(dogName + " instagram", Key.RETURN);
    // Clicks onto the first link
    await driver.findElement(By.css("h3")).click();
    // Clicks on the first picture
    await driver.findElement(By.css("a")).click();
    console.log(hi);
    
}
// Checks the name passed to see if it matches any of the dogs in the dictionary
async function dogCheck(command, dogName)
{
    var i;
    for(i = 0; i < dogs.doggo.Species.length; i++)
    {

    }
    driverSearch(dogName);
}
module.exports = async function (command) 
{
    // Grabs arguments and removes the command from the list
    const args = command.message.content.slice(prefix.length).trim().split(/ +/g);
    const commandExclusion = args.shift().toLowerCase();
    
    // Grabs the names for the dogs
    switch(args[0])
    {
        case "help":
            helpDoggo(command, args[0]);
            break;
        default:
            dogCheck(command, args[0]);
            console.log("Done with finding " + args[0]);
    }

    
}

// Allows the bot all permissions
module.exports.permission = ''

module.exports.use = ''

// Sets the description of the command
module.exports.description = 'Grabs a image of a dog of your own choosing'