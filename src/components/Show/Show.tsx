import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";
import "./Show.scss" ; 



type ShowProps = {
  id : number ;
  img : string ;
  title : string ;
  info : object  ;
  data : object[]  ;
  dataKey : string ; 
  activities?: { time: string; text: string }[];
}

export default function Show(props : ShowProps) {
    return (
        <div className="show" key={props.id}>
            <div className="view">
                <div className="header">
                    <img src={props.img} alt="" />
                    <h1>{props.title}</h1>
                    <button>Update</button>
                </div>
                <div className="deatails">
                  {
                    Object.entries(props.info).map((item) => {
                      return (
                        <div className="item" key={item[0]}>
                            <span className="label">{item[0]}</span>
                            <span className="value">{item[1]}</span>
                        </div>
                      )
                    })
                  }
                </div>
                <hr />
                <div className="chart">
                <ResponsiveContainer width="99%" height="100%">
                    <LineChart
                    width={500}
                    height={300}
                    data={props.data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={props.dataKey} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
                    </LineChart>
                </ResponsiveContainer>
                </div>
            </div>
            <div className="timeline">
                <h2>Latest Activities</h2>
                <ul>
                    {
                      props.activities?.map((ele , index) => {
                        return (
                          <li key={index}>
                            <p>{ele.text}</p>
                            <span>{ele.time}</span>
                          </li>
                        )
                      })
                    }
                </ul>
            </div>
        </div>
    )
}