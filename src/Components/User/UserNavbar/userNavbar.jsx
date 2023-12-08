import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./userNavbar.css";
const UserNavbar = () => {
  return (
    <>
      <Container fluid className="user-navbar-container">
        <div className="user-navbar-left">
          <p> COMMUNITY</p>
        </div>
        <div className="user-navbar-center">
          <Link to="">Home</Link>
          <Link to="">About</Link>
          <Link to="">Donate</Link>
        </div>
        <div className="user-navbar-right">
          <img src="https://picsum.photos/200/300" alt="profile-icon" />
        </div>
      </Container>
    </>
  );
};
export default UserNavbar;
