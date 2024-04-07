import React, { useState, useEffect, useMemo } from 'react';

interface TextSegment {
    text: string;
    color?: string; 
  }

interface TypewriterProps {
    segments: TextSegment[];
    speed?: number; 
    link?: string;
}



  const Typewriter: React.FC<TypewriterProps> = ({ segments, speed = 5,link = ""}) => {
    const [displayIndex, setDisplayIndex] = useState(0);
    
    const totalChars = useMemo(() => segments.reduce((acc, segment) => acc + segment.text.length, 0), [segments]);
  
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
            <span key={segment.text} style={{ color: segment.color }}>
              {segment.text.substring(0, Math.min(charsToShow, segment.text.length))}
            </span>
          );
        }
        currentLength += segment.text.length;
        if (currentLength > displayIndex) break;
      }
      return textSegments;
    }, [displayIndex, segments]);
    

    let textnolink;


    if(link !== ""){
      textnolink = (
        <div className="typewriterText" style={{ fontFamily: 'monospace', color: 'limegreen' }}> 
          <a href={link} target="_blank" rel="noreferrer noopener">{displayedText}</a>
        </div>
      );
    }
    else{
      textnolink = (
        <div className="typewriterText" style={{ fontFamily: 'monospace', color: 'limegreen' }}> 
          {displayedText}
        </div>
      );
    }

    
    return textnolink;
  };
  

export default Typewriter;