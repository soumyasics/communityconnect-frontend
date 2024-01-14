import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../Context/authContext";
import { useContext, useState } from "react";

import "./userNavbar.css";
import LoginModal from "../../Common/LoginModal/loginModal";

const UserNavbar = () => {
  const [loginModalShow, setLoginModalShow] = useState(false);
  const { userContext, logoutUserContext } = useContext(AuthContext);

  console.log("navb", userContext);

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
      navigate("/user/orphanages-list");
    } else {
      setLoginModalShow(true);
    }
  };
  const handleRedirectRequest = () => {
    if (userContext && userContext.userType) {
      navigate("/user/orphanage/request");
    } else {
      setLoginModalShow(true);
    }
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
          <button onClick={handleRedirectOrpList}>Orphanages</button>
          <button onClick={handleRedirectRequest}>Donate</button>
        </div>
        <div className="user-navbar-right">
          {/* <img src="https://picsum.photos/200/300" alt="profile-icon" /> */}
          {userContext?.userType ? (
            <button onClick={handleLogout}> Logout </button>
          ) : (
            <button onClick={redirectUserLogin}>Login</button>
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
export default UserNavbar;
