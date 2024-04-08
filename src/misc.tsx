import {coms} from './Commands';
import * as Interfcs from './interfcs';


var accl:Interfcs.Acceleration = {
    'banner': 0.1,
}

export function starterHistory(){
    const zerooneEntry = { prefix : "",command: "", response: "Michaelsoft Binbows [Version 66.0.19045.6646]",color: "white", speed: 0.1,islink: ""};
    const zeroEntry = { prefix : "",command: "", response: "(c) Michaelsoft Corporation. All rights reserved.",color: "white", speed: 0.1,islink: ""};
    const newEntry = { prefix : "",command: "", response: coms('banner'),color: "red", speed: 5,islink: ""};
    const secEntry = { prefix: "", command: "", response: "Welcome to my interactive web portfolio"  , color: "red", speed: 5,islink: ""};
    const thrEntry = { prefix : "",command: "", response: "For list of available commands type 'help'",color: "red", speed: 5,islink: ""}; 

    return [...[],zerooneEntry,zeroEntry,newEntry,secEntry,thrEntry];
}


export function determineSpeed(inp: string[]){
    var keys = Object.keys(accl);
    let spd = 10;
    if (keys.includes(inp[0])){
        spd = accl[inp[0]];
        console.log(spd);
    }
    return spd;

}