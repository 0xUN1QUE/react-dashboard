
import { GridColDef } from "@mui/x-data-grid";
import "./Add.scss" ; 


type AddProps = {
    slug : string , 
    columns : GridColDef[] ; 
    setOpen : React.Dispatch<React.SetStateAction<boolean>> ;
}

function Add(props : AddProps) {
    let handelSubmit = (e : React.FormEvent) => {
        e.preventDefault() ;
    }
    return (
        <div className = "add">
            <div className="modal">
                <span className="close" onClick={() => props.setOpen(false)}>×</span>
                <h1>Add New {props.slug}</h1>
                <form>
                    {
                        props.columns
                        .filter(column => column.field != "img" && column.field != "id") 
                        .map(column => {
                            return (
                                <div className="item">
                                    <label>{column.headerName}</label>
                                    <input type={column.type} placeholder={column.headerName} />
                                </div>
                            )
                        })
                    }
                    <button type = "submit" onClick={(e) => handelSubmit(e)}>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Add ; 