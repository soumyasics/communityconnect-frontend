import UserNavbar from "../../../Components/User/UserNavbar/userNavbar";
import CommunityHeader from "../../../Components/Common/CommunityHeader/CommunityHeader";
import { FaUserAstronaut } from "react-icons/fa";
import TextCenterComponent from "../../../Components/Common/TextCenterComponent/textCenterComponent";

const UserHome = () => {
  return (
    <>
      <UserNavbar />
      <CommunityHeader />
      <TextCenterComponent />
      <div className="user-home-container">
        <h3 className="user-home-heading">User Home</h3>
      </div>
    </>
  );
};
export default UserHome;
