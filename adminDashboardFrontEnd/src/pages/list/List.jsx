import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Datatable from "../../components/datatable/Datatable"
import "./list.scss"


export default function List(){
    return(
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>

                <Datatable/>
            </div>
        </div>
    )
}