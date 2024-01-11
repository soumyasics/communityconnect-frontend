import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./userNavbar.css";

const UserNavbar = () => {
  const navigate = useNavigate();
  const redirectUserLogin = () => {
    navigate("/user/login");
  };
  return (
    <>
      <Container fluid className="user-navbar-container">
        <div className="user-navbar-left">
          <p> COMMUNITY CONNECT</p>
        </div>
        <div className="user-navbar-center">
          <Link to="/">Home</Link>
          <Link to="">About</Link>
          <Link to="/user/orphanages-list">Orphanages</Link>
          <Link to="/user/orphanage/request">Donate</Link>
        </div>
        <div className="user-navbar-right">
          {/* <img src="https://picsum.photos/200/300" alt="profile-icon" /> */}
          <button onClick={redirectUserLogin}> Login </button>
        </div>
      </Container>
    </>
  );
};
export default UserNavbar;
