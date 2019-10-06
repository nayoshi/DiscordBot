

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
        case "A":
           break;
        case "All":
            break;

        default:
            command.message.channel.send("Currently, only Shiba-Inus are supported\nWe are fixing this issue however!\n");
            break;
    }

}