// import OrphnageNavbar from "../../../Components/Orphanage/OrphanageNavbar/orphanageNavbar";

import CommunityHeader from "../../../Components/Common/CommunityHeader/CommunityHeader";
import OrphanageNavbar from "../../../Components/Orphanage/OrphanageNavbar/orphanageNavbar";
import beTheChangeImg from "../../../Assets/Images/user-landing-after-login.png"
import leafHederImg from "../../../Assets/Images/leaf-img-header.png"
import "./orphanageHome.css";
const OrphanageHome = () => {
  return (
    <div>
      <OrphanageNavbar />
      <CommunityHeader imgPath={leafHederImg} />
      <h1>Orphanages Home</h1>
    </div>
  );
};
export default OrphanageHome;
