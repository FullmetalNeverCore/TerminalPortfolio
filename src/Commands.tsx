import {logo} from "./Logo";
import * as Interfcs from "./interfcs";

interface HashMap {
    [key: string]: string; 
}

var hashMap: Interfcs.HashMap = {
    'help': `
    clear   Clear terminal
    help    to open this screen
    social  Social links
    banner  to display banner
    `,
    'social': `
    github: https://github.com/FullmetalNeverCore
    telegram: @clockworkcore
    email: coretester95@gmail.com
    `,
    'link': `https://github.com/FullmetalNeverCore`
}


export var projects: Interfcs.HashMap = {
    'M3DE - is a 3D graphical engine,written in Python and GLSL,has implemented some demo-scenes and furmark-like benchmark' : "https://github.com/FullmetalNeverCore/M3DE",
    "NetworkScanner - iOS app created to scan local network and obtain device's local IPaddr and Name.": "https://github.com/FullmetalNeverCore/NetworkScanner",
    "NeofetchAtHome - a little python script that returns a neofetch-like output, but written by me in python for some of my internal needs": "https://github.com/FullmetalNeverCore/NeofetchAtHome",
}
export function coms(args:string){    
    //All commands handled by switch

    switch(args){
        case 'help':
            return hashMap['help'];
        case 'banner':
            return logo;
        case 'social':
            return hashMap['social'];
        case 'link':
            return hashMap['link'];
        default:
            return `-ncore: ${args}: command not found`
    }
}