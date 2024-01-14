import CommunityHeader from "../../../Components/Common/CommunityHeader/CommunityHeader";
import UserFooter from "../../../Components/Common/UserFooter/userFooter";
import UserNavbar from "../../../Components/User/UserNavbar/userNavbar";
import doSomethingImg from "../../../Assets/Images/orp-teady-bear.png";
import OrphanagesTableList from "../../../Components/Common/OrphanagesTableList/orphanagesTableList";
import AuthContext from "../../../Context/authContext";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import "./userOrphanagesList.css";
const UserOrphanagesList = () => {
  const { userContext } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (userContext && userContext.userType) {
    console.log('user loggined already')
    } else {
      navigate("/user/login");
    }
  }, [userContext]);
  return (
    <div>
      <UserNavbar />
      <CommunityHeader imgPath={doSomethingImg} textColor="black" />
      <OrphanagesTableList />
      <UserFooter />
    </div>
  );
};

export default UserOrphanagesList;
