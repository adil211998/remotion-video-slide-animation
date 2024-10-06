import React from 'react'
import "./style.css"
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

const Bubbles: React.FC = () => {

  const frame = useCurrentFrame();
  const { durationInFrames, width, height } = useVideoConfig();

  const circles = new Array(20).fill(null);

  return (
    <div className="circle-container">
      {
        circles.map((circle, index) => {

          const isEven = index % 2 === 0

          const translateX = interpolate(frame % 120, [0, durationInFrames], [-width/2, isEven ? width/10 : -width/10]);
          const translateY = interpolate(frame % 120, [0, durationInFrames/2], [0, isEven ? height/10 : -height/10]);

          const size = 15;

          return <div key={index} className='circle'
          style={{
            width: `${size}px`,
            height: `${size}px`,
            bottom: `${(index * durationInFrames) % height}px`,
            left: `${(index * durationInFrames) % width}px`,
            transform: `translate(${translateX}px, ${translateY}px)`
          }}></div>
        })
      }
    </div>
  )
}

export default Bubbles