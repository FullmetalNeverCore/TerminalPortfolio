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
    projects  some of my finished pet-projects
    `,
    'social': `
    github: https://github.com/FullmetalNeverCore
    telegram: @clockworkcore
    email: coretester95@gmail.com
    `,
    'link': `https://github.com/FullmetalNeverCore`,
    'ls':'roflodir',
    'cd':'cd: no such folder,its all a rolfs',
}


export var projects: Interfcs.HashMap = {
    'M3DE - is a 3D graphical engine,written in Python and GLSL,has implemented some demo-scenes and furmark-like benchmark' : "https://github.com/FullmetalNeverCore/M3DE",
    "NetworkScanner - iOS app created to scan local network and obtain device's local IPaddr and Name.": "https://github.com/FullmetalNeverCore/NetworkScanner",
    "NeofetchAtHome - a little python script that returns a neofetch-like output, but written by me in python for some of my internal needs": "https://github.com/FullmetalNeverCore/NeofetchAtHome",
    'CovStat - react webapp that displays covid-19 statistics for the world and the country of your choice': 'https://github.com/FullmetalNeverCore/covstat',
    'TerminalPortfolio - the source code of this very website!' : 'https://github.com/FullmetalNeverCore/TerminalPortfolio'
}
export function coms(args:string){    
    //All commands handled by switch

    const arg = args.split(' ');
    console.log(arg);

    switch(arg[0]){
        case 'help':
            return hashMap['help'];
        case 'banner':
            return logo;
        case 'social':
            return hashMap['social'];
        case 'link':
            return hashMap['link'];
        case 'ls':
            return hashMap['ls'];
        case 'cd':
            return hashMap['cd'];
        case 'mkdir':
            return `mkdir: cannot create directory ${arg[1]}`;
        default:
            return `-ncore: ${args}: command not found`
    }
}