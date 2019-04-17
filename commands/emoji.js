
const discord = require("discord.js");
const superagent = require("superagent")

module.exports.run = async (bot,message,args) =>{
var words = message.content.slice(7)

if(!words) {words = "emoji"}

let word = "";

function GetCharacter(input){  
    if(("abcdefghijklmnopqrstuvwxyz").includes(input)){
        return ':regional_indicator_' + input + ":";
    }else{  
        switch (input) {
            case "0":
                return ':zero:'
                break;
            case "1":
                return ':one:'
                break;
            case "2":
                return ':two:'
                break;
            case "3":
                return ':three:'
                break;
            case "4":
                return ':four:'
                break;
            case "5":
                return ':five:'
                break;
            case "6":
                return ':six:'
                break;
            case "7":
                return ':seven:'
                break;
            case "8":
                return ':eight:'
                break;
            case "9":
                return ':nine:'
                break;
            case "!":
                return ':grey_exclamation:'
                break;
            case "<":
                return ':arrow_backward:'
                break;
            case ">":
                return ':arrow_forward:'
                break;
            case ",":
                return ','
                break;
            case ".":
                return '.'
                break;
            case "@":
                return '@'
                break;
            default:
                return '    ' 
                break;
        }
    }	
}
//:arrow_backward: 
words.toLowerCase().split('').forEach(function(char){ word += char ? GetCharacter(char) : " "})

if(word && word.length < 1999){
    message.channel.send(word)
}else{
    message.channel.send('That message is to long! After the conversion you had ' + (word ? word.length : "n/a") +'/1999 characters')
}
}
module.exports.help = {
    name: "emoji"
}