import "./SingleProduct.scss" ; 
import Show from "../../components/Show/Show";
import { products } from "../../data";
import { useParams } from "react-router-dom";

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

const dataKey = "products"

export default function SingleProduct() {
    let productID = Number(useParams().id) ; 
    productID -= 1
    let props = {
        id : products[productID].id , 
        img :products[productID].img ,
        title : products[productID].title , 
        info : {
            fullname : `${products[productID].producer} ${products[productID].title}` ,
            price : products[productID].price ,
            createdAt : products[productID].createdAt ,
        },
        data : data , 
        dataKey : dataKey , 
        activities : [
          {time : "a month ago"  , text : "first ship"},
          {time : "a week ago"  , text : "shiping to afric"},
          {time : "a month ago"  , text : "shiping to USA"},
          {time : "a day ago"  , text : "shiping to Canda"},
        ]
    }
    return (
        <div className="singleProduct">
            <Show {...props}/>
        </div>
    )
}