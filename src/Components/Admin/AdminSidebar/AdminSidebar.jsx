import { GrUserAdmin } from "react-icons/gr";
import "./AdminSidebar.css";
import { Col, Row } from "react-bootstrap";

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar-container">
      <div className="sidebar-heading">
        <GrUserAdmin />
        <h5> Administration</h5>
      </div>
      <hr className="admin-sidebar-hr" />

      <div className="admin-sidebar-links">
        <div className="admin-sidebar-link">
          <GrUserAdmin />
          <h5>Overview</h5>
        </div>
        <div className="admin-sidebar-link">
          <GrUserAdmin />
          <h5>Users</h5>
        </div>
        <div className="admin-sidebar-link">
          <GrUserAdmin />
          <h5>Orphanages</h5>
        </div>
        <div className="admin-sidebar-link">
          <GrUserAdmin />
          <h5>Organizations</h5>
        </div>
        <div className="admin-sidebar-link">
          <GrUserAdmin />
          <h5>Events</h5>
        </div>
        <div className="admin-sidebar-link">
          <GrUserAdmin />
          <h5>Donations</h5>
        </div>
        <div className="admin-sidebar-link">
          <GrUserAdmin />
          <h5>Other</h5>
        </div>
      </div>
    </div>
  );
};
export default AdminSidebar;
