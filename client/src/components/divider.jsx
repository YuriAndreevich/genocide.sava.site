import React from 'react'
import SVG from "react-inlinesvg";




function Divider({wave, rotate=false, bottom, top}) {
  return (
    <SVG
          src={wave}
          style={{
            position: 'relative',
            bottom: `${bottom}px`,
            top: `${top}px`,
           transform: rotate && `rotate(180deg)` }}
          className="page1-divider"
        />
  )
}

export default Divider