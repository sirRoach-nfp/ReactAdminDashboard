import "./sidebar.scss"

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Sidebar(){
    return(
       <div className="sidebar"> 

            <div className="top">

                <span className="logo">mantaAdmin</span>

            </div>

            <hr />

            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">TITLE</p>
                    <li>
                        <PersonIcon className="icon"/>
                        <span>Users</span>
                    </li>

                    <li>
                        <Inventory2Icon className="icon"/>
                        <span>Products</span>
                    </li>

                    <li>
                        <ShoppingCartIcon className="icon"/>
                        <span>Orders</span>
                    </li>

                    
                    <li>
                        <LocalShippingIcon className="icon"/>
                        <span>Delivery</span>
                    </li>


                    <p className="title">USEFUL</p>
                    <li>
                        <AssessmentIcon className="icon"/>
                        <span>Stats</span>
                    </li>


                    
                    <li>
                        <NotificationsActiveIcon className="icon"/>
                        <span>Notification</span>
                    </li>

                    <p className="title">SERVICE</p>

                    <li>
                        <SettingsIcon className="icon"/>
                        <span>Settings</span>
                    </li>

                    <p className="title">USER</p>

                    <li>
                        <ManageAccountsIcon className="icon"/>
                        <span>Profile</span>
                    </li>



                    
                    <li>
                        <LogoutIcon className="icon"/>
                        <span>Logout</span>
                    </li>


                </ul>
            </div>

            <div className="bottom">

                <div className="colorOption"></div>
                <div className="colorOption"></div>


            </div>

       </div>
    )
}
