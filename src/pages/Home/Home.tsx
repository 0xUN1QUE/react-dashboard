import "./Home.scss" ;
import {topDealUsers}  from "../../data" ; 

import TinyChartBox from "../../components/TinyChartBox/TinyChartBox";
import BarChartBox from "../../components/BarChartBox/BarChartBox";
import PieChartBox from "../../components/PieChartBox/PieChartBox";
import BigChartBox from "../../components/BigChartBox/BiChartBox";


import { chartBoxUser ,
         chartBoxProduct ,
         chartBoxConversion ,
         chartBoxRevenue , 
         barChartBoxRevenue , 
         barChartBoxVisit , } from "../../data";



function Home() {
    return (
        <div className="home">
            <div className="box box-1">
                <h1>Top Deals</h1>
                <div className="topDealList">
                    {
                        topDealUsers.map(deal => {
                            return (
                                <div className="deal" key={deal.id}>
                                    <img className="img" src={deal.img}/>
                                    <div className="info">
                                        <span>{deal.username}</span>
                                        <span>{deal.email}</span>
                                    </div>
                                    <div className="amount">${deal.amount}</div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <div className="box box-2"><TinyChartBox{...chartBoxUser} /></div>
            <div className="box box-3"><TinyChartBox{...chartBoxRevenue}/></div>
            <div className="box box-4"><PieChartBox /></div>
            <div className="box box-5"><TinyChartBox{...chartBoxConversion} /></div>
            <div className="box box-6"><TinyChartBox{...chartBoxProduct} /></div>
            <div className="box box-7"><BigChartBox /></div>
            <div className="box box-8"><BarChartBox {...barChartBoxRevenue}/></div>
            <div className="box box-9"><BarChartBox {...barChartBoxVisit}/></div>
        </div>
    )
}

export default Home ; 