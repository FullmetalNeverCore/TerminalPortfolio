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


export interface TextSegment {
    text: string;
    color?: string; 
}

export interface TypewriterProps {
    segments: TextSegment[];
    speed?: number; 
    link?: string;
}

export interface DGT {
  charsToShow: number;
  segment: TextSegment;
}