import { Link } from "react-router-dom";
import "./TinyChartBox.scss" ; 
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";




type TinyChartProps = {
    color : string ;
    icon : string ;
    title : string ; 
    dataKey : string ; 
    number : number | string ;
    percentage : number ;
    chartData : object[] ; 
}

function TinyChartBox(props : TinyChartProps) {

    return (
        <div className = "TinyChartBox">
            <div className="infoBox">
                <div className="title">
                    <img src={props.icon} alt="" />
                    <span>{props.title}</span>
                </div>
                <h1>11.283</h1>
                <Link to= "/" style={{color : props.color , textDecoration : "none"}}>View All</Link>
            </div>
            <div className="TinyChart">
                <div className="chart">
                <ResponsiveContainer width="99%" height="100%">
                    <LineChart data={props.chartData}>
                        <Tooltip 
                            contentStyle={{background : "transparent" , border :"none"}}
                            labelStyle={{ display : "none" }}
                            position={{x: 10 , y: 70}}
                        />
                        <Line type="monotone" dataKey={props.dataKey} stroke= {props.color} strokeWidth={2} dot = {false} />
                    </LineChart>
                </ResponsiveContainer>
                </div>
                <div className="text">
                    <div className="percentage" style={{color : props.percentage < 0 ? "tomato" : "limegreen"}}>{props.percentage}$</div>
                    <div className="duration">this month</div>
                </div>
            </div>
        </div>
    )
}

export default TinyChartBox ; 