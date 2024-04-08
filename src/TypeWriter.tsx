import React, { useState, useEffect, useMemo } from 'react';
import * as Interfcs from "./interfcs";



const DynamicGradientText: React.FC<Interfcs.DGT> = ({ charsToShow, segment }) => {
  let grads = ['blue','red']
  let xcolor = segment.color;
  let ycolor = grads.includes(`${segment.color}`) ? `dark${segment.color}` : `${segment.color}`;
  const style = {
    backgroundImage: `linear-gradient(to bottom, ${xcolor}, ${ycolor})`,
    fontFamily: 'monospace',
    color: 'transparent',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
  };

  return (
    <span style={style}>
      {segment.text.substring(0, Math.min(charsToShow, segment.text.length))}
    </span>
  );
};


const Typewriter: React.FC<Interfcs.TypewriterProps> = ({ segments, speed = 5,link = ""}) => {
    const [displayIndex, setDisplayIndex] = useState(0);
    
    const totalChars = useMemo(() => segments.reduce((acc, segment) => acc + segment.text.length, 0), [segments]);

    let textnolink;


    useEffect(() => {
      if (displayIndex >= totalChars) return;
  
      const timer = setTimeout(() => {
        setDisplayIndex((currentDisplayIndex) => currentDisplayIndex + 1);
      }, speed);
  
      return () => clearTimeout(timer);
    }, [displayIndex, totalChars, speed]);
  
    const displayedText = useMemo(() => {
      let currentLength = 0;
      let textSegments: JSX.Element[] = [];

      for (let segment of segments) {
        const charsToShow = displayIndex - currentLength;
      
        if (charsToShow > 0) {
          textSegments.push(
            <DynamicGradientText charsToShow={charsToShow} segment={segment}></DynamicGradientText>
          );
        }
        currentLength += segment.text.length;
        if (currentLength > displayIndex) break;
      }
      return textSegments;
    }, [displayIndex, segments]);
    


    

    if(link !== ""){
      textnolink = (
        <div className="typewriterText" style={{ fontFamily: 'monospace', color: 'limegreen' }}> 
          <a href={link} target="_blank" rel="noreferrer noopener">{displayedText}</a>
        </div>
      );
    }
    else{
      textnolink = (
        <div className="typewriterText text-sm" style={{ fontFamily: 'monospace', color: 'limegreen'}}> 
          {displayedText}
        </div>
      );
    }

    
    return textnolink;
  };
  

export default Typewriter;