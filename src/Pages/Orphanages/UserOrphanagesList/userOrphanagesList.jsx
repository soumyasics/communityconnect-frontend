import CommunityHeader from "../../../Components/Common/CommunityHeader/CommunityHeader";
import UserFooter from "../../../Components/Common/UserFooter/userFooter";
import UserNavbar from "../../../Components/User/UserNavbar/userNavbar";
import doSomethingImg from "../../../Assets/Images/orp-teady-bear.png";
import "./userOrphanagesList.css";
import OrphanagesTableList from "../../../Components/Common/OrphanagesTableList/orphanagesTableList";
const UserOrphanagesList = () => {
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
