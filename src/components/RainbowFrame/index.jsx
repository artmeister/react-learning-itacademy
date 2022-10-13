const RainbowFrame = ({ colors, children }) => {

  let currentContent = null;

  colors.map((color, index) => {
    const content = colors[index - 1] ? currentContent : children;

    return currentContent = <div style={{ border: `5px solid ${color}`, padding: '10px' }}>{content}</div> 
  })

  return currentContent;
}

export default RainbowFrame;