import { Children } from "react";
import { useState } from "react";
import { useEffect } from "react";


const RainbowFrame = ({ colors, children }) => {

  let currentContent = null;

  colors.map((color, index) => {
    const content = colors[index - 1] ? currentContent : children;

    currentContent = <div style={{ border: `5px solid ${color}` }}>{content}</div> 
  })

  return currentContent;
}

export default RainbowFrame;