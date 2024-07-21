
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';
import "./datatable.scss"








export default function Datatable(){

    const actionColumn = [
        {field: "action", headerName: "Action", width: 200, renderCell: ()=> {

            return(
                <div className="cellAction">
                    <Link to="/users/test" style={{textDecoration: "none"}}>
                        <div className="viewButton">View</div>
                    </Link>
                        <div className="deleteButton">Delete</div>
                    
                </div>
            )
        }}
    ]
    return(
        <div className="datatable">

            <div className="datatableTitle">
                Add New User 
                <Link to="/users/new" style={{textDecoration: "none"}} className='Link'> 
                    Add New

                </Link>
            </div>
                <DataGrid className='datagrid'
                    rows = {userRows}
                    columns={userColumns.concat(actionColumn)}
                    pageSize = {5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection

                />




        </div>
    )
}