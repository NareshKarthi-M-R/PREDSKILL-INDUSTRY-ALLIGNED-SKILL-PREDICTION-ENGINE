import React, { useState, useEffect } from "react";

const TypingText = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (forward) {
        if (index < text.length) {
          setDisplayedText((prev) => prev + text[index]);
          setIndex((prev) => prev + 1);
        } else {
          setForward(false); 
        }
      } else {
        if (index > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setIndex((prev) => prev - 1);
        } else {
          setForward(true); 
        }
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [index, forward, text, speed]);

  return (
    <span className="inline-block">
      {displayedText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default TypingText;