import { FcBinoculars } from "react-icons/fc";
import { FcVoicePresentation } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { FcCollaboration } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { FcInTransit } from "react-icons/fc";
import { FcServices } from "react-icons/fc";
import { FcOrganization } from "react-icons/fc";
import { FcImport } from "react-icons/fc";
import { LuLogOut } from "react-icons/lu";
import "./AdminSidebar.css";
import { useNavigate } from "react-router-dom";
const AdminSidebar = ({ activePage, changeActivePage }) => {
  const navigate = useNavigate();
  function handleLogout() {
    if (localStorage.getItem("cc-admin")) {
      localStorage.removeItem("cc-admin");
    }
    navigate("/admin/login");
  }
  return (
    <div className="admin-sidebar-container">
      <div className="sidebar-heading">
        <FcBusinessman />
        <h5> Community Connect</h5>
        <h5> Administration</h5>
      </div>
      <hr className="admin-sidebar-hr" />

      <div className="admin-sidebar-links">
        <div
          className="admin-sidebar-link"
          onClick={() => changeActivePage("overview")}
        >
          <FcBinoculars />
          <h5>Overview</h5>
        </div>
        <div
          className="admin-sidebar-link"
          onClick={() => changeActivePage("users")}
        >
          <FcVoicePresentation />
          <h5>Users</h5>
        </div>
        <div
          className="admin-sidebar-link"
          onClick={() => changeActivePage("orphanages")}
        >
          <FcHome />
          <h5>Orphanages</h5>
        </div>
        <div
          className="admin-sidebar-link"
          onClick={() => changeActivePage("organizations")}
        >
          <FcOrganization />
          <h5>Organizations</h5>
        </div>
        <div
          className="admin-sidebar-link"
          onClick={() => changeActivePage("donation-requests")}
        >
          <FcImport />
          <h5>Donation Requests</h5>
        </div>
        <div className="admin-sidebar-link" onClick={handleLogout}>
          <LuLogOut />
          <h5 className="text-danger">Logout</h5>
        </div>
        {/* <div
          className="admin-sidebar-link"
          onClick={() => changeActivePage("donations")}
        >
          <FcInTransit />
          <h5>Donations</h5>
        </div>
        <div
          className="admin-sidebar-link"
          onClick={() => changeActivePage("events")}
        >
          <FcCollaboration />
          <h5>Events</h5>
        </div>
        */}
      </div>
    </div>
  );
};
export default AdminSidebar;
