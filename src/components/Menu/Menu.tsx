
import "./Menu.scss" ; 
import {menu} from "../../data" ;
import { Link } from "react-router-dom";

function Menu() {
    return (
        <div className="menu">
            {
                menu.map((ele) => {
                   return (
                    <ul className="list" key={`list-${ele.id}`}>
                        <div className="title">{ele.title}</div>
                        {
                            ele.listItems.map((item) => {
                                return <Link to = {item.url} className="item">
                                    <img className="icon"  src={`/${item.icon}`} alt="" />
                                    <span className="label">{item.title}</span>
                                </Link>
                            })

                        }

                    </ul>

                   ) 
                })
            }

        </div>
    )
}

export default Menu