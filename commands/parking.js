

module.exports = async function (command) 
{
    // Grabs arguments and removes the command from the list
    const args = command.message.content.slice(Prefix.length).trim().split(/ +/g);
    const commandExclusion = args.shift().toLowerCase();
    
    // Grabs the names for the dogs
    switch(args[0])
    {
        case "All":
            break;
    
        case "A":
           break;

        case "B":
            break;

        case "C":
            break;

        case "D":
            break;
        
        case "H":
            break;
        
        case "I":
            break;
        
        case "Libra":
            break;

        default:
            command.message.channel.send("It seems you have provided input that is currently not available\n");
            break;
    }

}

// Allows the bot all permissions
module.exports.permission = ''

module.exports.use = ''

// Sets the description of the command
module.exports.description = 'Shows the amount of spaces in a garage'