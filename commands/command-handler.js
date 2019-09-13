const commandMap = require("");
module.exports = function(message, prefix){
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
    
    const line = message.content.split(' ');
    let command = {
        "name": line[0],
        "args": line.slice(1),
        "message": message,
    };
    
    if( command.name.substring(0,1) != prefix ) return;
    if ( commandMap[command.name] == null ) return;
    
    commandMap[command.name](command);
    

}