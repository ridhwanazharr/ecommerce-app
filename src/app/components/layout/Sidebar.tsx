import { FaGauge } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";

export const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <p className="sidebar-title">Main</p>
            <a className="sidebar-item" href="/admin"><FaGauge /> Dashboard</a>           
            <p className="sidebar-title">Settings</p>
            <a className="sidebar-item" href="/admin/settings"><FaGear /> Settings</a>
            <a className="sidebar-item" href=""><FaUser/> User</a>
        </div>
     );
};