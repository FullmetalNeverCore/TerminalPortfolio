export interface HashMap {
    [key: string]: string; 
}


export interface CommandHistoryEntry {
    prefix : string;
    command: string;
    response: string;
    color: string;
    speed: number;
    islink?: string;
}



export interface Acceleration{
    [key: string]: number; 
}
