import { Container, Form, Button } from "react-bootstrap";
import UserNavbar from "../../../Components/User/UserNavbar/userNavbar.jsx";
import "./userLogin.css";
import { useState } from "react";
import UserLoginForm from "./userLoginForm.jsx";
import OrganizationLogin from "../../Organizations/OrganizationLogin/OrganizationLogin.jsx";
import AdminLoginForm from "../../Admin/AdminLogin/AdminLogin.jsx";
import OrphanageLogin from "../../Orphanages/OrphanagesLogin/OrphanagesLogin.jsx";

const UserLogin = () => {
  const [activeUser, setActiveUser] = useState("user");

  const handleChange = (e) => {
    setActiveUser(e.target.value);
  };

  return (
    <>
      <UserNavbar />
      <Button variant="primary">Primary</Button>{" "}
      <Container className="user-login-container">
        <Form.Select onChange={handleChange}>
          <option value="user">User</option>
          <option value="orphanage">Orphanage</option>
          <option value="organization">Organization</option>
          <option value="admin">Admin</option>
        </Form.Select>
      </Container>
      {activeUser === "user" && <UserLoginForm />}
      {activeUser === "orphanage" && <OrphanageLogin />}
      {activeUser === "organization" && <OrganizationLogin />}
      {activeUser === "admin" && <AdminLoginForm />}
    </>
  );
};
export default UserLogin;
