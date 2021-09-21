import "./App.css";
// import {arc} from 'd3'
import { arc } from "d3-shape";
const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 20;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 40;
const mouthWidth=20;
const mouthRadius = 120;
const mouthArc = arc()
  .innerRadius(mouthRadius)
  .outerRadius(mouthRadius + mouthWidth)
  .startAngle(Math.PI / 2)
  .endAngle(Math.PI * 3/ 2);
const App = () => {
  return (
    <div className="App" style={{display:"flex",justifyContent:"center",alignItems:"center" ,marginTop:40}}>
      <svg width={width} height={height}>
        <g transform={`translate(${centerX},${centerY})`}>
        <circle
          // cx={centerX}
          // cy={centerY}
          r={centerY - strokeWidth / 2}
          fill="yellow"
          stroke="black"
          stroke-width={strokeWidth}
        />
        <circle
          cx={ -eyeOffsetX}
          cy={- eyeOffsetY}
          r={eyeRadius}
        />
        <circle
          cx={ eyeOffsetX}
          cy={- eyeOffsetY}
          r={eyeRadius}
        />
        {/* <circle 
        cx={centerX - eyeOffsetX} cy={centerY-eyeOffsetY} r={eyeRadius} /> */}
        {/* <circle cx={centerY- eyeOffsetX} cy={centerY-eyeOffsetY} r={eyeRadius} /> */}
        {/* <path d={mouthArc()} /> */}
    
        <path d={mouthArc()} />
        </g>
      </svg>
    </div>
  );
};

export default App;
