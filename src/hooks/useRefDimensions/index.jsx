import { useState, useEffect } from 'react';


const useRefDimensions = (ref) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (ref.current) {
      const { current } = ref
      const boundingRect = current.getBoundingClientRect()
      const { width, height } = boundingRect
      setDimensions({ width: Math.round(width), height: Math.round(height) })
    } else setDimensions({ width: 0, height: 0 })
  }, [ref])

  return dimensions
} 

export default useRefDimensions;