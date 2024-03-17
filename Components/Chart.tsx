
import { LineChart, AreaChart, Area, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';



export function Recharts (props: { 
    data?: object[],
    width?: number,
    height?: number,
}) { 
    const width = props.width ? props.width : window.innerWidth
    return (
  <LineChart width={width} height={props.height} data={props.data} margin={{ top: 10, right: 30, left: -30, bottom: 0 }}>
    {/* <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#DED7CE" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#DED7CE" stopOpacity={0}/>
        </linearGradient>
    </defs> */}
    <Tooltip animationDuration={0}/>
    <CartesianGrid stroke="#F1EEEE"/>
    <Line
        type="monotone"
        dataKey="value"
        stroke="#627D9A"
        strokeWidth={2}
        dot={false}
    />
    <XAxis
        dataKey="time"
        interval={128}
        style={{fontSize: "8px"}}
        stroke="#ddd"
    />
    <YAxis
        style={{fontSize: "8px"}}
        stroke="#ddd"
    />
    
    {/* <Area type="monotone" dataKey="Price" stroke="#858FA3" fillOpacity={0} fill="#fff" strokeWidth={1}   /> */}
  </LineChart> 
)}