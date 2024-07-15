
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import "./DataTable.scss" ; 
import { Link } from "react-router-dom";

  


type DataTableProps = {
    columns : GridColDef[] , 
    rows : object[] , 
    slug : string ,
}
function DataTable(props : DataTableProps) {

    let actionCol : GridColDef = {
        field : "action" , 
        headerName : "Action" , 
        width: 100 , 
        renderCell: (params) => {
            return (
                <div className="action">
                    <Link to = {`/${props.slug}/${params.row.id}`}>
                        <img src="/view.svg" alt="" />
                    </Link>
                    <span className="delete">
                        <img src="/delete.svg" alt="" />
                    </span>
                </div>
            )
        }
    }

    return (
        <div className="DataTable">
            <DataGrid
                className="DataGrid" 
                rows={props.rows}
                columns={[...props.columns , actionCol]}
                initialState={{
                    pagination: {
                    paginationModel: {
                        pageSize: 10,
                    },
                },}}
                slots={{toolbar:GridToolbar}}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },
                    }
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter
                disableDensitySelector
                disableColumnSelector 
            />
        </div>
    )
}

export default DataTable ; 