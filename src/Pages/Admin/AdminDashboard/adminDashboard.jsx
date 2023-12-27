import AdminFooter from "../../../Components/Admin/AdminFooter/adminFooter";
import AdminNavbar from "../../../Components/Admin/AdminNavbar/adminNavbar";
import {Fragment} from 'react';

import "./adminDashboard.css";
import AdminSidebar from "../../../Components/Admin/AdminSidebar/AdminSidebar";
const AdminDashboard = () => {
    return (
        <Fragment >
            <div className="admin-dashboard-container">
                <AdminSidebar/>
                
            </div>

        </Fragment>
    )
}
export default AdminDashboard;