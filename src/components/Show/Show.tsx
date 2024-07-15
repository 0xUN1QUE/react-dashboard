import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";
import "./Show.scss" ; 

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

export default function Show() {
    return (
        <div className="show">
            <div className="view">
                <div className="header">
                    <img src="https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
                    <h1>Jonh Doe</h1>
                    <button>Update</button>
                </div>
                <div className="deatails">
                    <div className="item">
                        <span className="label">Full Name</span>
                        <span className="value">Jounh Doe</span>
                    </div>
                    <div className="item">
                        <span className="label">Status</span>
                        <span className="value">verified
                        </span>
                    </div>
                    <div className="item">
                        <span className="label">Phone</span>
                        <span className="value">123 456 789</span>
                    </div>
                    <div className="item">
                        <span className="label">johndoe@gmail.com</span>
                        <span className="value">Email</span>
                    </div>
                </div>
                <hr />
                <div className="chart">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
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
                    <li>
                      <p>John Doe purchased Playstation 5 Digital Edition </p>
                      <span>3 day ago</span>
                    </li>
                    <li>
                      <p>John Doe purchased Playstation 5 Digital Edition </p>
                      <span>3 day ago</span>
                    </li>
                    <li>
                      <p>John Doe purchased Playstation 5 Digital Edition </p>
                      <span>3 day ago</span>
                    </li>
                    <li>
                      <p>John Doe purchased Playstation 5 Digital Edition </p>
                      <span>3 day ago</span>
                    </li>
                    <li>
                      <p>John Doe purchased Playstation 5 Digital Edition </p>
                      <span>3 day ago</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}