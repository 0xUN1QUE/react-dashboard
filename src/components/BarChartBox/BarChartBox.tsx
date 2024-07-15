import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./BarChartBox.scss" ; 


type BarChartProps = {
    title : string ;
    dataKey : string ;
    color : string ;
    chartData : object[] ; 
}

function BarChartBox(props : BarChartProps ) {
    return (
        <div className="BarChartBox">
            <h1>{props.title}</h1>
            <div className="BarChart">
                <ResponsiveContainer width="99%" height={150}>
                        <BarChart data={props.chartData}>
                            <Tooltip 
                                cursor = {{fill : "none"}}
                                contentStyle={{background : "#2a3447" , borderRadius : "6px"}}
                                labelStyle={{display : "none"}}
                            />
                            <Bar type="monotone" dataKey={props.dataKey} fill= {props.color} />
                        </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    ) ; 
}


export default BarChartBox ; 