import Show from "../../components/Show/Show";
import { useParams } from "react-router-dom";
import { userRows } from "../../data";
import "./SingleUser.scss" ; 

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

const dataKey = "users"


export default function SingleUser() {

    let userID = Number(useParams().id) ; 
    userID -= 1
    let props = {
        id : userRows[userID].id , 
        img :userRows[userID].img ,
        title : userRows[userID].firstName , 
        info : {
            fullname : `${userRows[userID].lastName} ${userRows[userID].firstName}` ,
            phone : userRows[userID].phone ,
            email : userRows[userID].email ,
            createdAt : userRows[userID].createdAt ,
        },
        data : data , 
        dataKey : dataKey , 
        activities: [
            {
              text: "John Doe purchased Playstation 5 Digital Edition",
              time: "3 day ago",
            },
            {
              text: "Jane Doe added Playstation 5 Digital Edition into their wishlist",
              time: "1 week ago",
            },
            {
              text: "Mike Doe purchased Playstation 5 Digital Edition",
              time: "2 weeks ago",
            },
            {
              text: "Anna Doe reviewed the product",
              time: "1 month ago",
            },
            {
              text: "Michael Doe added Playstation 5 Digital Edition into their wishlist",
              time: "1 month ago",
            },
            {
              text: "Helen Doe reviewed the product",
              time: "2 months ago",
            },
          ],
    }

    
    return (
        <div className="singleUser">
            <Show {...props} />
        </div>
    )
}