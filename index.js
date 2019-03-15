
// The Modules

const Eris = require('eris');

// The Client

var bot = new Eris.CommandClient(process.env.TOKEN,  {}, {
    description: "An Discord Bot",
    owner: "TimmyTimothyAnderson#3719",
    prefix: ">"
});

bot.on("ready", () => { // When the bot is ready
    console.log("Ready!"); // Log "Ready!"
});

bot.registerCommand("ping", "Pong!", { // Make a ping command
// Responds with "Pong!" when someone says "e!ping"
    description: "Pong!",
    fullDescription: "This command could be used to check if the bot is up. Or entertainment when you're bored."
});

bot.registerCommand("bored", "Try playing a game!", { // Make a bored command
// Responds with "Try playing a game" when someone says "e!bored"
    description: "bored!",
    fullDescription: "This command is for when you are bored"
});

var echoCommand = bot.registerCommand("echo", (msg, args) => { // Make an echo command
    if(args.length === 0) { // If the user just typed "e!echo", say "Invalid input"
        return "Invalid input";
    }
    var text = args.join(" "); // Make a string of the text after the command label
    return text; // Return the generated string
}, {
    description: "Make the bot say something",
    fullDescription: "The bot will echo whatever is after the command label.",
    usage: "<text>"
});

echoCommand.registerSubcommand("reverse", (msg, args) => { // Make a reverse subcommand under echo
    if(args.length === 0) { // If the user just typed "e!echo reverse", say "Invalid input"
        return "Invalid input";
    }
    var text = args.join(" "); // Make a string of the text after the command label
    text = text.split("").reverse().join(""); // Reverse the string
    return text; // Return the generated string
}, {
    description: "Make the bot say something in reverse",
    fullDescription: "The bot will echo, in reverse, whatever is after the command label.",
    usage: "<text>"
});

echoCommand.registerSubcommandAlias("backwards", "reverse"); // Alias "e!echo backwards" to "e!echo reverse"

bot.connect();
