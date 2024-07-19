import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widgets/Widget"
import "./home.scss"
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
export default function Home() {

    return(
        <div className="home">
            <Sidebar/>

            <div className="homeContainer"> 
                    <Navbar/>
                    home cont
                    <div className="widgets">
                        <Widget type="user"/>
                        <Widget type="order"/>
                        <Widget type="earning"/>
                        <Widget type="balance"/>
                    </div>

            </div>
        </div>
    )
}