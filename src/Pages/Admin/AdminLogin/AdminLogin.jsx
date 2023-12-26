import AdminNavbar from "../../../Components/Admin/AdminNavbar/adminNavbar";
import AdminLoginForm from "../../../Components/Admin/AdminLoginForm/adminLoginForm";
import "./AdminLogin.css";
const AdminLogin = () => {
  return (
    <div className="admin-login-container">
      <AdminNavbar />
      <AdminLoginForm/>
    </div>
  );
};

export default AdminLogin;
