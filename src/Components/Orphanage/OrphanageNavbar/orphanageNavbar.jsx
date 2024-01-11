import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./orphanageNavbar.css";

const OrphanageNavbar = () => {
  const navigate = useNavigate();
  const redirectUserLogin = () => {
    navigate("/user/login");
  };
  return (
    <>
      <Container fluid className="user-navbar-container">
        <div className="user-navbar-left" onClick={() => {
          navigate('/orphanage')
        }}>
          <p> COMMUNITY CONNECT</p>
        </div>
        <div className="user-navbar-center">
          <Link to="/orphanage">Home</Link>
          <Link to="">About</Link>
          <Link to="/orphanage/orphanages-list">Orphanages</Link>
          <Link to="/orphanage/donation-request">Request</Link>
        </div>
        <div className="user-navbar-right">
          {/* <img src="https://picsum.photos/200/300" alt="profile-icon" /> */}
          <button onClick={redirectUserLogin}> Login </button>
        </div>
      </Container>
    </>
  );
};
export default OrphanageNavbar;
