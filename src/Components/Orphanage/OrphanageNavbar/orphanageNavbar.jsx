import { useContext, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../Context/authContext";
import LoginModal from "../../Common/LoginModal/loginModal";
import "./orphanageNavbar.css";

const OrphanageNavbar = () => {
  const { logoutUserContext, userContext } = useContext(AuthContext);
  const [loginModalShow, setLoginModalShow] = useState(false);

  const navigate = useNavigate();
  const redirectUserLogin = () => {
    navigate("/user/login");
  };
  const handleLogout = () => {
    logoutUserContext();
    navigate("/user/login");
  };
  const handleRedirectOrpList = () => {
    if (userContext && userContext.userType) {
      navigate("/orphanage/orphanages-list");
    } else {
      setLoginModalShow(true);
    }
  };
  const handleRedirectRequest = () => {
    if (userContext && userContext.userType) {
      navigate("/orphanage/donation-request");
    } else {
      setLoginModalShow(true);
    }
  };
  return (
    <>
      <Container fluid className="user-navbar-container">
        <div
          className="user-navbar-left"
          onClick={() => {
            navigate("/orphanage");
          }}
        >
          <p> COMMUNITY CONNECT</p>
        </div>
        <div className="user-navbar-center">
          <Link to="/orphanage">Home</Link>
          <Link to="">About</Link>
          <button className="border-0 text-light bg-transparent" onClick={handleRedirectOrpList}>Orphanages</button>
          <button className="border-0 text-light bg-transparent" onClick={handleRedirectRequest}>Request</button>
        </div>
        <div className="user-navbar-right">
          {/* <img src="https://picsum.photos/200/300" alt="profile-icon" /> */}
          {userContext?.userType ? (
            <button  onClick={handleLogout}> Logout </button>
          ) : (
            <button  onClick={redirectUserLogin}>Login</button>
          )}
        </div>
      </Container>
      <LoginModal
        show={loginModalShow}
        onHide={() => setLoginModalShow(false)}
      />
    </>
  );
};
export default OrphanageNavbar;
