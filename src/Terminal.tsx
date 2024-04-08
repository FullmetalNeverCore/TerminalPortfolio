import React, { useEffect, useRef, useState } from 'react';
import Typewriter from './TypeWriter';
import './styles/styles.css'
import {coms,projects} from './Commands';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Interfcs from "./interfcs";
import * as misc from './misc';

var accl:Interfcs.Acceleration = {
    'banner': 0.1,
}

const entry: Interfcs.CommandHistoryEntry = {
    prefix: "!",
    command: "test",
    response: "This is a test command",
    color: "white", 
    speed: 5,
    islink: "",
};



const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [displayText, setDisplayText] = useState('');
  
  const [history, setHistory] = useState<Interfcs.CommandHistoryEntry[]>([]); 
  const inputRef = useRef<HTMLInputElement>(null); 



  
  useEffect(() => {
    setHistory(misc.starterHistory);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []); 


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)  => {
    let possible_comms: Array<string> = ['clear'];
    let possible_link_comms: Array<string> = ['link','projects'];

    let inp = input.split(" ");
    let spd:number = misc.determineSpeed(inp);
    var keys = Object.keys(accl);

    e.preventDefault()
    let answ: string = ''; 

    if(possible_comms.includes(inp[0])){
        switch(input){
            case 'clear':
                setHistory([]);
        }
    }
    else if (possible_link_comms.includes(inp[0])){
        let arr: Interfcs.HashMap = projects;
        let newEntries = [{
            prefix : "0xncore@port:~ $ ",
            command: input,
            response: answ,
            color: entry.color,
            speed: spd,
            islink: entry.islink
        }];
        
     
        newEntries = newEntries.concat(Object.keys(arr).map(element => ({
            prefix : "",
            command: "",
            response: element,
            color: entry.color,
            speed: spd,
            islink: arr[element]
        })));
        setHistory(history => [...history, ...newEntries]); 
    }
    else{
        answ = coms(input);
    }



    if(inp[0] != 'clear' && !possible_link_comms.includes(inp[0])){
        const newEntry = { prefix : "0xncore@port:~ $ ",command: input, response: answ, color: entry.color,speed: spd,islink: entry.islink}; 
        setHistory([...history, newEntry]); 
    }

    console.log(history);
    setInput('');
  };


  return (
    <div className="terminal">
      <div className='terminal-text'>
      {history.map((entry, index) => (
        <div key={index} className="terminal-form">
            <div className="input-prefix">
                <span className="typewriterText" style={{ fontFamily: 'monospace', color: 'limegreen' }}>{entry.prefix}</span>
                <Typewriter
                    segments={[
                        { text: entry.command, color: entry.color},
                    
                    ]}
                    speed={entry.speed}
                    link={entry.islink}
                    />
            </div>   
            <div className="typewriterPreformatted">
                <Typewriter
                        segments={[
                            { text: entry.response, color: entry.color },
                        
                        ]}
                        speed={0}
                        link={entry.islink}
                        />
            </div>
            </div>
      ))}
        <form onSubmit={handleSubmit} className="terminal-form">
          <div className="input-prefix">
          <Typewriter
                segments={[
                    { text: '0xncore@port:', color: 'lime' },
                    { text: '~ $ ', color: 'blue' }
                ]}
                speed={10}
                />
            <input type="text" value={input} style={{ fontFamily: 'monospace', color: 'white' }} className="input-field" ref={inputRef} onChange={handleInputChange} />
          </div>
        </form>
        </div>
      </div>
  );
};
  
export default Terminal;