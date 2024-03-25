import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../Context/authContext";
import { useContext, useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import LoginModal from "../../Common/LoginModal/loginModal";
import "./userNavbar.css";
import BASE_URL from "../../../api/Backend-url";

const UserNavbar = () => {
  const [loginModalShow, setLoginModalShow] = useState(false);
  const [userProfilePic, setUserProfilePic] = useState(null);
  const [username, setUsername] = useState(null);

  const { userContext, logoutUserContext, loginUserContext } =
    useContext(AuthContext);

  useEffect(() => {
    let pathname = userContext?.userData?.img?.filename || null;
    if (pathname) {
      setUserProfilePic(`${BASE_URL}${pathname}`);
    }
    let username2 =
      userContext?.userData?.firstName ||
      userContext?.userData?.name ||
      "Profile";
    setUsername(username2);
  }, [userContext]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user-data")) || null;
    if (userData) {
      loginUserContext("user", userData);
      if (localStorage.getItem("organization-data")) {
        localStorage.removeItem("organization-data");
      }
      if (localStorage.getItem("orphanage-data")) {
        localStorage.removeItem("orphanage-data");
      }
    }

    const orgData =
      JSON.parse(localStorage.getItem("organization-data")) || null;
    if (orgData) {
      loginUserContext("organization", orgData);
      if (localStorage.getItem("orphanage-data")) {
        localStorage.removeItem("orphanage-data");
      }
      if (localStorage.getItem("user-data")) {
        localStorage.removeItem("user-data");
      }
    }
  }, []);

  const navigate = useNavigate();
  const redirectUserLogin = () => {
    navigate("/user/login");
  };

  const handleLogout = () => {
    if (localStorage.getItem("user-data")) {
      localStorage.removeItem("user-data");
    }
    if (localStorage.getItem("orphanage-data")) {
      localStorage.removeItem("orphanage-data");
    }
    if (localStorage.getItem("organization-data")) {
      localStorage.removeItem("organization-data");
    }

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
  const redirectProfile = () => {
    if (userContext && userContext.userType == "user") {
      navigate("../user/profile");
    } else if (userContext && userContext.userType == "organization") {
      navigate("../organization/profile");
    }
  };

  return (
    <>
      <Container fluid className="user-navbar-container">
        <div className="user-navbar-left">
          <p style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
            {" "}
            COMMUNITY CONNECT
          </p>
        </div>
        <div className="user-navbar-center">
          <Link to="/">Home</Link>
          <Link to="/user/leaderboard">Leaderboard</Link>
          {userContext.userType === "organization" && (
            <Link to="/blood-camp">Camp</Link>
          )}

          <Link to="/view-blood-camps">ViewCamp</Link>

          <button
            className="border-0 text-light bg-transparent"
            onClick={handleRedirectOrpList}
          >
            Orphanages
          </button>
          <button
            className="border-0 text-light bg-transparent"
            onClick={handleRedirectRequest}
          >
            Donate
          </button>
        </div>
        <div className="user-navbar-right">
          {/* <img src="https://picsum.photos/200/300" alt="profile-icon" /> */}
          {userContext?.userType ? (
            <div onClick={redirectProfile} style={{ cursor: "pointer" }}>
              {userProfilePic ? (
                <div>
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                    className="mr-3"
                    src={userProfilePic}
                    alt="profile"
                  />
                  {username}
                </div>
              ) : (
                <button onClick={redirectProfile}>
                  {" "}
                  <CgProfile /> {username}
                </button>
              )}
            </div>
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
